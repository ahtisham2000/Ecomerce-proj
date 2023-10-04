export const AddBooktoCart =({commit},{id,title,quantity,price}) => {
    commit('ADD_TO_CART',{id,title,quantity,price});
}

export const removeProductFromCart = ({commit},{id}) => {
    commit('REMOVE_FROM_CART', {id});
} 