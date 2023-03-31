import { App } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"

import layoutStore from "@/store/layout"
import sessionStore from "@/store/session"

import { routes } from "@/apps/routes"

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const layout = layoutStore()
    const session = sessionStore()

    document.title = `${to.meta.title} - ${layout.SiteName}`

    const isLogin = !!session.Token
    if (to.meta.login && !isLogin) {
        next("/passport/login")
        return
    }

    const isAdmin = session.Level == 1
    if (to.meta.admin && !isAdmin) {
        next("/error/403")
        return
    }

    next()
})

// export default

export default (app: App) => {
    app.use(router)
}
