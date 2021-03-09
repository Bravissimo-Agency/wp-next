<script>
import { EventBus } from '../index.js';

export default {
    inject: ['dialogId'],

    async mounted () {
        this.$el.addEventListener('click', this.trigger);
    },

    methods: {
        trigger () {
            EventBus.$emit('closeDialog', this.dialogId);
        }
    },

    render () {
        return this.$scopedSlots.default();
    }
};
</script>
