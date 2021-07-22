function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const state = () => ({
    cart: [],
    addToCartResult: "",
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
        state.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    addToCart (state, product) {
        
        let item = state.cart.find(i => i.id === product.id);
        if (item) {
            state.addToCartResult = "This item was already in your cart.";
            item.quantity++
        }
        else {
            state.addToCartResult = "Item successfully added to your cart.";
            state.cart.push({...product, quantity: 1})
        }
        updateLocalStorage(state.cart)
    },
    removeProduct(state, productId) {
        state.cart = state.cart.filter(i => i.id !== productId);
        const cart = state.cart
        updateLocalStorage(cart)
    },
    updateProductQuantity(state, { productId, value }) {
        const product = state.cart.find((p) => p.id === productId);
        value = Number(value);
        if (value > 1) {
            product.quantity = value;
        } else {
            product.quantity = 1;
        }
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
