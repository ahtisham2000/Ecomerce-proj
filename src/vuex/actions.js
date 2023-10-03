export const AddBooktoCart =({commit},{title,quantity,price}) => {
    commit('ADD_TO_CART',{title,quantity,price});
}

export const removeProductFromCart = ({commit},{title}) => {
    commit('REMOVE_FROM_CART', {title});
} 