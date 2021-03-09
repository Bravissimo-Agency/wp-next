@props([
    'id'
])

<dialog-trigger-provider
    v-bind:dialog-id="'{{ $id }}'"
    v-slot:default="$trigger"
>
    {!! $slot !!}
</dialog-trigger-provider>