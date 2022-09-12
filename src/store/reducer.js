import {
    OPEN_SUBMENU,
    CLOSE_SUBMENU,
    OPEN_SIDEMENU,
    CLOSE_SIDEMENU,
    OPEN_CART,
    CLOSE_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    HANDLE_CART_ITEMS,
    REMOVE_CART_ITEM,
    INPUT_QUANTITY,
    CART_TOTAL_SUB,
    RESET_QUANTITY,
    OPEN_MODAL,
    CLOSE_MODAL,
    SINGLE_ITEM,
    SIDE_NAME,
    DROPDOWN_LOCATION,
    OPEN_DROPDOWN,
    CLOSE_DROPDOWN,
    PRICE_RANGE,
    INPUT_PRICE_RANGE,

} from "./constants";

const initState = {
    isSubmenuOpen: false,
    isSidemenuOpen: false,
    isModalOpen: false,
    isDropdownOpen: false,
    isCartOpen: false,
    cart: [],
    itemQuantity: 1,
    total: 0,
    singleItem: undefined,
    sideName: "",
    location: { left: null, top: null },
    priceRange: [0, 1000]

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

        case INPUT_QUANTITY:
            {
                const { quantity, id } = action.payload;
                const newQuantity = parseInt(quantity);
                const newCart = [...state.cart];
                const updatedItemIndex = newCart.findIndex(item => item.id === id);
                const updatedItem = { ...newCart[updatedItemIndex] };
                updatedItem.quantity = newQuantity;
                newCart[updatedItemIndex] = updatedItem;

                if (updatedItemIndex < 0) {
                    return {
                        ...state,
                        itemQuantity: newQuantity
                    }
                }
                return {
                    ...state,
                    cart: newCart
                }
            }

        case REMOVE_CART_ITEM:
            {
                const newCart = state.cart.filter(item => item.id !== action.payload);
                return {
                    ...state,
                    cart: newCart
                }
            };
        case CART_TOTAL_SUB:
            {
                const total = state.cart.reduce((current, next) => current + (next.quantity * next.item.discountedPrice), 0);
                return {
                    ...state,
                    total: total
                }


            };
        case RESET_QUANTITY:
            {
                return {
                    ...state,
                    itemQuantity: 1
                }
            };

        case OPEN_MODAL:
            {
                const body = document.body;
                body.style.overflowY = "hidden";
                return {
                    ...state,
                    isModalOpen: true
                }
            };

        case CLOSE_MODAL:
            {
                const body = document.body;
                body.style.overflowY = "";
                return {
                    ...state,
                    isModalOpen: false,
                    itemQuantity: 1
                }
            };

        case SINGLE_ITEM: {
            return {
                ...state,
                singleItem: action.payload
            }
        };

        case SIDE_NAME:
            {
                return {
                    ...state,
                    sideName: action.payload
                }
            };

        case DROPDOWN_LOCATION:
            {
                const { left, top } = action.payload;
                const newLocation = { left: left, top: top }
                return {
                    ...state,
                    location: newLocation
                }
            };

        case OPEN_DROPDOWN:
            {
                return {
                    ...state,
                    isDropdownOpen: true
                }
            };

        case CLOSE_DROPDOWN:
            {
                const newLocation = { left: null, top: null }

                return {
                    ...state,
                    isDropdownOpen: false,
                    location: newLocation
                }
            };

        case INPUT_PRICE_RANGE:
            {
                const { event, inputId } = action.payload;
                const newRange = [...state.priceRange];
                const min = 0;
                const max = 1000;
                inputId === "to" ?
                    newRange[1] = parseInt(event.target.value)
                    : newRange[0] = parseInt(event.target.value);
                if (newRange[0] < min) {
                    newRange[0] = 0;
                }

                if (newRange[0] > newRange[1]) {
                    newRange[0] = newRange[1];
                }

                if (newRange[1] > max) {
                    newRange[1] = max;
                }
                return {
                    ...state,
                    priceRange: newRange
                }
            }

        case PRICE_RANGE:
            return {
                ...state,
                priceRange: action.payload
            }

        default:
            throw new Error("Invalid action");
    }
}

export { initState };
export default reducer;