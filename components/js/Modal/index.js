import Vue from 'vue';
export const EventBus = new Vue();

const components = {
    DialogProvider: () =>
        import(
            /* webpackChunkName: "dialog-provider" */ './DialogProvider.vue'
        ),
    DialogTriggerProvider: () =>
        import(
            /* webpackChunkName: "dialog-trigger-provider" */ './DialogTriggerProvider.vue'
        ),
    DialogCloseProvider: () =>
        import(
            /* webpackChunkName: "dialog-close-provider" */ './DialogCloseProvider.vue'
        ),
};

export default (Vue) => {
    for (const name in components) {
        Vue.component(name, components[name])
    }
};