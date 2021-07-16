import { createStore } from 'vuex'

import products from "./modules/products.module";
import users from "./modules/users.module";
import cart from "./modules/cart";


export default createStore({
  modules: {
    products,
    cart,
    users,
  }
})
