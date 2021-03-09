import Vue from 'vue';
export const EventBus = new Vue();

const components = {
    DialogProvider: () =>
        import(
            /* webpackChunkName: "dialog-provider" */ './src/DialogProvider.vue'
        ),
    DialogTriggerProvider: () =>
        import(
            /* webpackChunkName: "dialog-trigger-provider" */ './src/DialogTriggerProvider.vue'
        ),
    DialogCloseProvider: () =>
        import(
            /* webpackChunkName: "dialog-close-provider" */ './src/DialogCloseProvider.vue'
        ),
};

export default (Vue) => {
    for (const name in components) {
        Vue.component(name, components[name])
    }
};