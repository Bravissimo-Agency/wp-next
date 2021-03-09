<script>
import { EventBus } from '../index.js';

export default {
    props: {
        dialogId: {
            type: String,
            required: true
        }
    },

    async mounted () {
        this.$el.addEventListener('click', this.trigger);
    },

    methods: {
        trigger () {
            EventBus.$emit('openDialog', this.dialogId);
        }
    },

    render () {
        return this.$scopedSlots.default();
    }
};
</script>
