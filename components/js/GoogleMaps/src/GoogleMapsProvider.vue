<script>
import initGoogleMap from './initGoogleMap.js';
import { debounce } from '../../utils.js';

export default {
    props: {
        coordinates: {
            type: Array,
            required: true
        },

        markerIcon: {
            type: String,
            required: true
        },

        markerWidth: {
            type: Number,
            required: true
        },

        markerHeight: {
            type: Number,
            required: true
        },

        apiKey: {
            type: String,
            required: true
        },

        zoom: {
            type: Number,
            required: true
        },

        mapStyle: {
            type: Array,
            default: null
        }
    },

    data: () => ({
        markers: [],
        google: null,
        map: null,
        listenerHandler: null
    }),

    async mounted () {
        this.google = await initGoogleMap(this.apiKey);

        this.init();

        this.listenerHandler = this.google.maps.event
            .addDomListener(window, 'resize', debounce(this.handleRezise, 250));
    },

    beforeDestroy () {
        this.google.maps.event.removeListener(this.listenerHandler);
    },

    methods: {
        init () {
            this.map = this.createMap();

            this.markers = this.createMarkers();

            if (this.coordinates.length > 1) {
                this.fitAllMarkers();
            }
        },

        createMap () {
            return new this.google.maps.Map(this.$el, {
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: false,
                center: this.getPosition(this.coordinates[0]),
                zoom: this.zoom,
                styles: this.mapStyle
            });
        },

        createMarkers () {
            const icon = this.getIcon();

            return this.coordinates.map(coordinate => new this.google.maps.Marker({
                position: this.getPosition(coordinate),
                animation: this.google.maps.Animation.DROP,
                map: this.map,
                icon
            }));
        },

        getPosition ({ lat, lng }) {
            return {
                lat: Number(lat),
                lng: Number(lng)
            };
        },

        getIcon () {
            const iconSize = this.getIconSize();

            return {
                url: this.markerIcon,
                size: iconSize,
                scaledSize: iconSize
            };
        },

        getIconSize () {
            const screenWidth = window.innerWidth;
            let multiplier = 1;

            if (screenWidth < 600) {
                multiplier = 0.8;
            } else if (screenWidth < 1030) {
                multiplier = 0.9;
            }

            return new this.google.maps.Size(this.markerWidth * multiplier, this.markerHeight * multiplier);
        },

        fitAllMarkers () {
            const bounds = new this.google.maps.LatLngBounds();

            this.markers.forEach(marker => {
                bounds.extend(marker.position);
            });

            this.map.fitBounds(bounds);
        },

        handleRezise () {
            this.resizeMarkers();

            if (this.coordinates.length > 1) {
                this.fitAllMarkers();
            } else {
                this.centerMap();
            }
        },

        centerMap () {
            const center = this.getPosition(this.coordinates[0]);

            this.map.panTo(center);
        },

        resizeMarkers () {
            const icon = this.getIcon();

            this.markers.forEach(marker => {
                marker.setIcon(icon);
            });
        }
    },

    render () {
        return this.$scopedSlots.default();
    }
};
</script>