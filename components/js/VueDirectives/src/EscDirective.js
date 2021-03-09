const EscDirective = {
    bind (el, binding) {
        if (typeof binding.value !== 'function') {
            throw new Error('Argument must be a function');
        }

        el._keyandler = (event) => {
            if (event.keyCode === 27) {
                binding.value();
            }
        };

        document.addEventListener('keydown', el._keyandler);
    },

    unbind (el) {
        document.removeEventListener('keydown', el._keyandler);
    }
};

export default EscDirective;
