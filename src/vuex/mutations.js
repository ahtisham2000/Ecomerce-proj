export const ADD_TO_CART = (state, {title,quantity,price}) => {
    state.cart.push({
        title,
        quantity,
        price
    })
}