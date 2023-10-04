export const ADD_TO_CART = (state, {id,title,quantity,price}) => {

    let productInCart = state.cart.find(item => {
        return item.id === id;
        
    });

    if(productInCart){
        productInCart.quantity += quantity;
        return;
    }
    
    state.cart.push({
        id,
        title,
        quantity,
        price
    })
}

export const REMOVE_FROM_CART = (state, {id}) => {
    state.cart = state.cart.filter(item => {
        return item.id !== id;
    })
}

