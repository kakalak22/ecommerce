import { OPEN_SUBMENU, CLOSE_SUBMENU, OPEN_SIDEMENU, CLOSE_SIDEMENU, OPEN_CART, CLOSE_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, INPUT_QUANTITY, HANDLE_CART_ITEMS } from "./constants";

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