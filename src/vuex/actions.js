export const AddBooktoCart =({commit},{title,quantity,price}) => {
    commit('ADD_TO_CART',{title,quantity,price});
}