import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [location, setLocation] = useState({ left: null, top: null });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [singleItem, setSingleItem] = useState();
    const [sideName, setSideName] = useState("");
    const [cart, setCart] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(1);

    const handleQuantityInputChange = (event, id) => {
        const newQuantity = parseInt(event.target.value);
        const newCart = [...cart];
        newCart.forEach(item => {
            if (item.id === id) item.quantity = newQuantity;
        });
        if (id === null) {
            setItemQuantity(newQuantity);
        }
    }

    const handleIncreaseQuantity = (id) => {
        const newCart = [...cart];
        newCart.forEach(item => {
            if (item.id === id) item.quantity++;
        });
        setCart(newCart);
        if (id === null) {
            const newQuantity = itemQuantity + 1;
            setItemQuantity(newQuantity);
        }
    }

    const handleDecreaseQuantity = (id) => {
        const newCart = [...cart];
        newCart.forEach(item => {
            if (item.id === id) {
                if (item.quantity === 1) return;
                item.quantity--;
            }
        });
        setCart(newCart)
        if (!id) {
            if (itemQuantity === 0) return;
            const newQuantity = itemQuantity - 1;
            setItemQuantity(newQuantity);
        }
    }

    const handleCart = (id, item, quantity) => {
        const newQuantity = quantity || 1;
        let isDuplicate = false;
        const newCart = [...cart];
        newCart.forEach(item => {
            if (id === item.id) {
                item.quantity += newQuantity;
                setCart(newCart);
                isDuplicate = true;
            }
        });
        !isDuplicate && newCart.push({ id: id, quantity: newQuantity, item: item });
        setCart(newCart);
    }

    const calculateTotalSub = () => {

        const total = cart.reduce((current, next) => current + (next.quantity * next.item.discountedPrice), 0);
        return total
    }

    const removeItemInCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }

    const handleSingleItemChange = (item) => {
        setSingleItem(item);
    }

    const openModal = () => {
        setIsModalOpen(true);
        const body = document.body;
        body.style.overflowY = "hidden";
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setItemQuantity(1);
        const body = document.body;
        body.style.overflowY = "";
    }

    const handleSideNameChange = (sideName) => {
        setSideName(sideName);
    };

    const handleLocationChange = (left, top) => {
        setLocation({ left: left, top: top })
    }

    const openDropdown = () => {
        setIsDropdownOpen(true);
    }
    const closeDropdown = () => {
        setIsDropdownOpen(false);
        setLocation({ left: null, top: null })
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    const openSidemenu = () => {
        const body = document.body;
        body.style.height = "100vh";
        body.style.overflowY = "hidden";
        setIsSidemenuOpen(true);
    }

    const closeSidemenu = () => {
        const body = document.body;
        body.style.height = "";
        body.style.overflowY = "";
        setIsSidemenuOpen(false);
    }

    const openCart = () => {
        const body = document.body;
        body.style.height = "100vh";
        body.style.overflowY = "hidden";
        setIsCartOpen(true);
    }

    const closeCart = () => {
        const body = document.body;
        body.style.height = "";
        body.style.overflowY = "";
        setIsCartOpen(false);
    }

    const obj = {
        sideName,
        handleSideNameChange,
        location,
        handleLocationChange,
        isDropdownOpen,
        openDropdown,
        closeDropdown,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        isSidemenuOpen,
        openSidemenu,
        closeSidemenu,
        isCartOpen,
        openCart,
        closeCart,
        isModalOpen,
        openModal,
        closeModal,
        singleItem,
        handleSingleItemChange,
        cart,
        handleCart,
        calculateTotalSub,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        itemQuantity,
        handleQuantityInputChange,
        removeItemInCart
    }

    return <AppContext.Provider value={obj}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}