@props([
    'coordinates',
    'zoom' => 10,
    'markerWidth' => 38,
    'markerHeight' => 61,
    'markerIcon' => config('googleMaps.marker')
])

<google-maps-provider
    :coordinates='@json($coordinates)'
    :marker-width="{{ $markerWidth }}"
    :marker-height="{{ $markerHeight }}"
    :zoom="{{ $zoom }}"
    marker-icon="{{ $markerIcon }}"
    api-key="{{ config('services.google_maps_api_key') }}"
>
    <div class="googleMap ab100"></div>
</google-maps-provider>
