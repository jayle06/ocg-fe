import { createStore } from 'vuex'

import products from "./modules/products.module";
import users from "./modules/users.module";
import cart from "./modules/cart.module";
import home from "./modules/home.module";
import statistic from "./modules/statistic.module";
import order from "./modules/order.module";

export default createStore({
  modules: {
    products,
    cart,
    users,
    home,
    statistic,
    order,
  }
})
