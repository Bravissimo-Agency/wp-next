const components = {
    GoogleMapsProvider: () =>
        import(
            /* webpackChunkName: "google-maps-provider" */ './src/GoogleMapsProvider.vue'
        ),
};

export default (Vue) => {
    for (const name in components) {
        Vue.component(name, components[name])
    }
};