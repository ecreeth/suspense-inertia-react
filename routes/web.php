<?php

use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'foo' => 'This is the home page'
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About', [
        'foo' => 'This is the about page'
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'foo' => 'This is the contact page'
    ]);
});
