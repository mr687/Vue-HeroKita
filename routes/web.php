<?php

use Illuminate\Support\Facades\Route;

Route::get('{any}', 'AppController')->where('any', '.*');
