function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const state = () => ({
    cart: [],
    totalItems: 0,
});

const getters = {
    totalItems(state) {
        return state.cart.reduce(
            (total, product) => total + product.quantity,
            0
        );
    },
};
const actions = {};
const mutations = {
    getProductsInCart(state) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        state.cart = cart.map((cart) => {
            cart.totalPrice = cart.quantity * cart.price;
            return cart;
        });
    },
    addToCart (state, product) {
        let item = state.cart.find(i => i.id === product.id);
        if (item) {
            item.quantity++
        }
        else {
            state.cart.push({...product, quantity: 1})
        }
        updateLocalStorage(state.cart)
    },
    removeProduct(state, productId) {
        state.cart = state.cart.filter(i => i.id !== productId);
        updateLocalStorage(state.cart)
    },
    
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
