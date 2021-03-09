@props([
    'id',
    'transitionName' => 'dialog'
])

<dialog-provider 
    v-bind:dialog-id="'{{ $id }}'"
    v-slot:default="DialogProvider"
>
    <transition name="{{ $transitionName }}">
        <div
            v-show="DialogProvider.isOpen"
            v-esc="DialogProvider.$close"
            v-cloak
            {{ $attributes }}
        >
            {!! $slot !!}
        </div>
    </transition>
</dialog-provider>
