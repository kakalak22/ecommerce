import React, { useState } from "react";
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
import { useGlobalContext } from "../../Context";
import Cart from "../Cart/Cart";

const Searchbar = () => {
  const { closeSubmenu, openSidemenu, isSidemenuOpen, openCart } =
    useGlobalContext();
  const [isFocus, setIsFocus] = useState(false);
  const [location, setLocation] = useState({ left: null, top: null });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const [wishListTotal, setWishListTotal] = useState(1);

  const displaySearchInputOutline = isFocus ? " in_focus" : "out_focus";

  const icons = [
    { icon: <BiSearch />, name: "Search", count: null },
    { icon: <AiOutlineUser />, name: "Account", count: null },
    { icon: <AiOutlineStar />, name: "Wishlist", count: wishListTotal },
    { icon: <BsArrowDownUp />, name: "Compare", count: null },
    {
      icon: <AiOutlineShoppingCart onClick={openCart} />,
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
      <Cart />
      <div className="searchbar" onMouseEnter={closeSubmenu}>
        <div className="searchbar__inner">
          <div className="searchbar__left">
            <GiHamburgerMenu onClick={openSidemenu} />
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
