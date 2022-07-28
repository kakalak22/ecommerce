import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

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

    const obj = {
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        isSidemenuOpen,
        openSidemenu,
        closeSidemenu,
    }

    return <AppContext.Provider value={obj}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}