import "@/helper/globals"

import { createApp } from "vue"

import App from "@/app.vue"
import "@/assets/style.scss"

import setupPinia from "@/setup/pinia"

import setupRoute from "@/setup/route"
import setupRouter from "@/setup/router"

import setupElement from "@/setup/element"

import setupEcharts from "@/setup/echarts"
import setupHighlight from "@/setup/highlight"

const app = createApp(App)

setupPinia(app)

setupRoute(app)
setupRouter(app)

setupElement(app)

setupEcharts(app)
setupHighlight(app)

app.mount("#app")
