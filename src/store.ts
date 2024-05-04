// @ts-ignore
import { createStore } from "vuex"

export default createStore({
  state: {
    menu: false,
  },
  mutations: {
    // @ts-ignore
    toggleMenu(state) {
      if (window.scrollY > 20) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      } else {
        state.menu = !state.menu
      }
    },
    // @ts-ignore
    closeMenu(state) {
      state.menu = false
    },
  },
})
