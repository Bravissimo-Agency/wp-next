<?php

namespace WpNext\ModalComponent;

use Illuminate\Support\ServiceProvider;

class ModalComponentServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/../resources', 'modal');
    }
}
