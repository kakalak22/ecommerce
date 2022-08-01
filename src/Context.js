import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [location, setLocation] = useState({ left: null, top: null });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [sideName, setSideName] = useState("");

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
        closeCart
    }

    return <AppContext.Provider value={obj}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}