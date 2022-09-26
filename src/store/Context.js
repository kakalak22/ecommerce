import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(1);
    const [location, setLocation] = useState({ left: null, top: null });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [singleItem, setSingleItem] = useState();
    const [sideName, setSideName] = useState("");
    const [priceRange, setPriceRange] = useState([0, 50]);
    const [priceRangeErrorMessage, setPriceRangeErrorMessage] = useState("");
    const [paginatedItems, setPaginatedItems] = useState(null);

    const handlePaginatedItems = (items) => {
        setPaginatedItems(items);
    }

    const handlePriceRange = (priceRange) => {
        setPriceRange(priceRange);
    }

    const handleInputPriceRangeChange = (event, inputId) => {
        const newRange = [...priceRange];
        const min = 0;
        const max = 90000000;
        setPriceRangeErrorMessage("");
        inputId === "to" ?
            newRange[1] = parseInt(event.target.value)
            : newRange[0] = parseInt(event.target.value);
        if (newRange[0] < min) {
            newRange[0] = 0;
            setPriceRangeErrorMessage("Price cannot lower than 0");
        }

        if (newRange[0] > newRange[1]) {
            newRange[0] = newRange[1];
            setPriceRangeErrorMessage("Price from cannot higher than price to");
        }

        if (newRange[1] > max) {
            newRange[1] = max;
            setPriceRangeErrorMessage("Price cannot higher than max price");
        }


        setPriceRange(newRange);
    }


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

    const resetQuantity = () => {
        setItemQuantity(1);
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


    const obj = {
        sideName,
        handleSideNameChange,
        location,
        handleLocationChange,
        isDropdownOpen,
        openDropdown,
        closeDropdown,
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
        resetQuantity,
        removeItemInCart,
        priceRange,
        priceRangeErrorMessage,
        handlePriceRange,
        handleInputPriceRangeChange,
        paginatedItems,
        handlePaginatedItems
    }

    return <AppContext.Provider value={obj}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}