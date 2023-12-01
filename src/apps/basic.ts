import { Vue as BaseVue } from "vue-facing-decorator"

import UseCache from '@/store/cache'
import layoutStore from "@/store/layout"
import sessionStore from "@/store/session"

export * from "vue-facing-decorator"

export class Vue extends BaseVue {
    public cache = UseCache()
    public layout = layoutStore()
    public session = sessionStore()
}
