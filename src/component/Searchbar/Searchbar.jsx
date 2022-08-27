import React, { useEffect, useState } from "react";
import "./Searchbar.scss";
import { BiSearch } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Logo from "../../asset/images/logo.png";
import Dropdown from "../Dropdown/Dropdown";
import SideBar from "../Sidebar/Sidebar";
import { useGlobalContext } from "../../store/Context";
import { useRef } from "react";
import { useStore, actions } from "../../store";

const Searchbar = () => {
  const [state, dispatch] = useStore();

  const { cart } = useGlobalContext();
  const [isFocus, setIsFocus] = useState(false);
  const [location, setLocation] = useState({ left: null, top: null });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const [wishListTotal, setWishListTotal] = useState(1);
  const searchbar = useRef(null);

  const displaySearchInputOutline = isFocus ? " in_focus" : "out_focus";

  const [scrollDir, setScrollDir] = useState("scrolling down");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      setScrollY(scrollY);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useEffect(() => {
    if (scrollY < 300) {
      searchbar.current.classList.remove("sticky");
      return;
    }
    // scrollDir === "scrolling down"
    //   ? searchbar.current.classList.remove("sticky")
    //   : searchbar.current.classList.add("sticky");
    searchbar.current.classList.add("sticky");
  }, [scrollDir, scrollY]);

  useEffect(() => {
    const newCartTotal = cart.reduce((current, next) => {
      return current + next.quantity;
    }, 0);
    setCartTotal(newCartTotal);
  });

  const icons = [
    { icon: <BiSearch />, name: "Search", count: null },
    { icon: <AiOutlineUser />, name: "Account", count: null },
    { icon: <AiOutlineStar />, name: "Wishlist", count: wishListTotal },
    { icon: <BsArrowDownUp />, name: "Compare", count: null },
    {
      icon: (
        <AiOutlineShoppingCart onClick={() => dispatch(actions.openCart())} />
      ),
      name: "Cart",
      count: cartTotal,
    },
  ];

  const handleSubmenu = (event) => {
    const { left, right, bottom } = event.target.getBoundingClientRect();
    const dropDownCenter = (left + right) / 2;
    const subMenuBottom = bottom + 8;
    setLocation({ left: dropDownCenter, top: subMenuBottom });
    setIsDropdownOpen(true);
  };

  return (
    <React.Fragment>
      <SideBar />
      <div
        className="searchbar"
        ref={searchbar}
        onMouseEnter={() => dispatch(actions.closeSubmenu())}
      >
        <div className="searchbar__inner">
          <div className="searchbar__left">
            <GiHamburgerMenu onClick={() => dispatch(actions.openSidemenu())} />
            <img src={Logo} alt="logo" />
          </div>
          <div className="searchbar__middle">
            <form
              className={`searchbar__middle__form ${displaySearchInputOutline}`}
            >
              <input
                type="text"
                placeholder="Search products"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
              />
              <button>
                <BiSearch />
              </button>
            </form>
            <img src={Logo} alt="logo" />
          </div>
          <div className="searchbar__right">
            <Dropdown
              isDropdownOpen={isDropdownOpen}
              location={location}
              name={name}
              nameOfClass={"dropdown"}
            />

            {icons.map(({ icon, name, count }, index) => {
              // if (name === "Cart") {
              //   console.log("helo");
              //   return (
              //     <span
              //       key={index}
              //       onMouseEnter={() => setName(name)}
              //       onClick={openCart}
              //     >
              //       <div
              //         className={count !== null ? "cart" : ""}
              //         count={count}
              //         style={{
              //           width: "25px",
              //           height: "25px",
              //           position: "relative",
              //         }}
              //         onMouseEnter={(event) => handleSubmenu(event)}
              //         onMouseLeave={() => setIsDropdownOpen(false)}
              //       >
              //         {icon}
              //       </div>
              //     </span>
              //   );
              // }

              return (
                <span key={index} onMouseEnter={() => setName(name)}>
                  <div
                    className={count !== null ? "cart" : ""}
                    count={count}
                    style={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                    }}
                    onMouseEnter={(event) => handleSubmenu(event)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {icon}
                  </div>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
