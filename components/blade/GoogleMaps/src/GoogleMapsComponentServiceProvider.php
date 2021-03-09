<?php

namespace WpNext\GoogleMapsComponent;

use Illuminate\Support\ServiceProvider;

class GoogleMapsComponentServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/../resources', 'googleMaps');
    }
}
