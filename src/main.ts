import "./assets/base.css"

import { createApp } from "vue"
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { LaShippingFastSolid, BiArrowUpCircle } from "oh-vue-icons/icons"
import store from "./store"
import onscroll from "./onscroll"

addIcons(LaShippingFastSolid, BiArrowUpCircle)

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

onscroll.run()

app.use(router)
app.component("v-icon", OhVueIcon)
app.use(store)

app.mount("#app")
