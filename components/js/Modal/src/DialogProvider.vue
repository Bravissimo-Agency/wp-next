<script>
import { EventBus } from '../index.js';

export default {
    props: {
        dialogId: {
            type: String,
            required: true
        }
    },

    data: () => ({
        isOpen: false
    }),

    provide() {
        return {
            dialogId: this.dialogId
        }
    },

    async mounted () {
        EventBus.$on('openDialog', this.open);
        EventBus.$on('closeDialog', this.close);
    },

    methods: {
        open (id) {
            if (id !== this.dialogId) {
                return;
            }

            this.isOpen = true;

            document.body.style.overflow = 'hidden';
        },

        close (id) {
            if (id !== this.dialogId) {
                return;
            }

            this.isOpen = false;

            document.body.style.overflow = '';
        }
    },

    render () {
        return this.$scopedSlots.default({
            $open: () => this.open(this.dialogId),
            $close: () => this.close(this.dialogId),
            isOpen: this.isOpen,
        });
    }
};
</script>
