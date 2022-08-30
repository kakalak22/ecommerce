import { OPEN_SUBMENU, CLOSE_SUBMENU, OPEN_SIDEMENU, CLOSE_SIDEMENU, OPEN_CART, CLOSE_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, INPUT_QUANTITY, HANDLE_CART_ITEMS, REMOVE_CART_ITEM, CART_TOTAL_SUB, RESET_QUANTITY, OPEN_MODAL, CLOSE_MODAL, SINGLE_ITEM, SIDE_NAME, DROPDOWN_LOCATION, OPEN_DROPDOWN, CLOSE_DROPDOWN, PRICE_RANGE, INPUT_PRICE_RANGE } from "./constants";

export const openSubmenu = payload => ({
    type: OPEN_SUBMENU,
    payload
})

export const closeSubmenu = payload => ({
    type: CLOSE_SUBMENU,
    payload
})

export const openSidemenu = payload => ({
    type: OPEN_SIDEMENU,
    payload
})

export const closeSidemenu = payload => ({
    type: CLOSE_SIDEMENU,
    payload
})

export const openCart = payload => ({
    type: OPEN_CART,
    payload
})

export const closeCart = payload => ({
    type: CLOSE_CART,
    payload
})

export const increaseQuantity = payload => ({
    type: INCREASE_QUANTITY,
    payload
})

export const decreaseQuantity = payload => ({
    type: DECREASE_QUANTITY,
    payload
})

export const inputQuantity = payload => ({
    type: INPUT_QUANTITY,
    payload
})

export const handleCartItems = payload => ({
    type: HANDLE_CART_ITEMS,
    payload
})

export const removeCartItem = payload => ({
    type: REMOVE_CART_ITEM,
    payload
})

export const cartTotalSub = payload => ({
    type: CART_TOTAL_SUB,
    payload
})

export const resetQuantity = payload => ({
    type: RESET_QUANTITY,
    payload
})

export const openModal = payload => ({
    type: OPEN_MODAL,
    payload
})

export const closeModal = payload => ({
    type: CLOSE_MODAL,
    payload
})

export const handleSingleItemChange = payload => ({
    type: SINGLE_ITEM,
    payload
})

export const handleSideNameChange = payload => ({
    type: SIDE_NAME,
    payload
})

export const handleLocationChange = payload => ({
    type: DROPDOWN_LOCATION,
    payload
})

export const openDropdown = payload => ({
    type: OPEN_DROPDOWN,
    payload
})

export const closeDropdown = payload => ({
    type: CLOSE_DROPDOWN,
    payload
})

export const handlePriceRange = payload => ({
    type: PRICE_RANGE,
    payload
})

export const handleInputPriceRangeChange = payload => ({
    type: INPUT_PRICE_RANGE,
    payload
})