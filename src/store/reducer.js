import { OPEN_SUBMENU, CLOSE_SUBMENU, OPEN_SIDEMENU, CLOSE_SIDEMENU, OPEN_CART, CLOSE_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, HANDLE_CART_ITEMS } from "./constants";

const initState = {
    isSubmenuOpen: false,
    isSidemenuOpen: false,
    isCartOpen: false,
    cart: [],
    itemQuantity: 1
}

const reducer = (state, action) => {
    switch (action.type) {
        case OPEN_SUBMENU:
            return {
                ...state,
                isSubmenuOpen: true
            };

        case CLOSE_SUBMENU:
            return {
                ...state,
                isSubmenuOpen: false
            };

        case OPEN_SIDEMENU:
            return {
                ...state,
                isSidemenuOpen: true
            };

        case CLOSE_SIDEMENU:
            return {
                ...state,
                isSidemenuOpen: false
            };

        case OPEN_CART:
            return {
                ...state,
                isCartOpen: true
            };

        case CLOSE_CART:
            return {
                ...state,
                isCartOpen: false
            };

        case HANDLE_CART_ITEMS: {
            const { id, quantity, item } = action.payload;
            const newQuantity = quantity || 1;
            const newCart = [...state.cart];
            const updatedItemIndex = newCart.findIndex(item => item.id === id);
            if (updatedItemIndex < 0) {
                newCart.push({ id: id, quantity: newQuantity, item: item });
            }
            else {
                const updatedItem = {
                    ...newCart[updatedItemIndex]
                };
                updatedItem.quantity += newQuantity;
                newCart[updatedItemIndex] = updatedItem;
            }
            return {
                ...state,
                cart: newCart
            }
        };

        case INCREASE_QUANTITY:
            {
                if (action.payload === null) {
                    const newQuantity = state.itemQuantity + 1;
                    return {
                        ...state,
                        itemQuantity: newQuantity
                    }
                }
                const newCart = [...state.cart];
                const updatedItemIndex = newCart.findIndex(item => item.id === action.payload);
                const updatedItem = { ...newCart[updatedItemIndex] };
                updatedItem.quantity++;
                newCart[updatedItemIndex] = updatedItem;
                return {
                    ...state,
                    cart: newCart
                }
            };

        case DECREASE_QUANTITY:
            {
                if (!action.payload) {
                    if (state.itemQuantity === 0) return;
                    const newQuantity = state.itemQuantity - 1;
                    return {
                        ...state,
                        itemQuantity: newQuantity
                    }
                }

                const newCart = [...state.cart];
                const updatedItemIndex = newCart.findIndex(item => item.id === action.payload);
                const updatedItem = { ...newCart[updatedItemIndex] };
                updatedItem.quantity === 1 ? updatedItem.quantity = 1 : updatedItem.quantity--;
                newCart[updatedItemIndex] = updatedItem;
                return {
                    ...state,
                    cart: newCart
                }
            };

        default:
            throw new Error("Invalid action");
    }
}

export { initState };
export default reducer;