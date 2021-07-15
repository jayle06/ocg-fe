import { createStore } from 'vuex'

import products from "./modules/products.module";
import cart from "./modules/cart";


export default createStore({
  modules: {
    products,
    cart,
  }
})
