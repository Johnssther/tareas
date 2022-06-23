<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
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
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/', function () {
//     return Inertia::render('Auth/Login');
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('profile', App\Http\Controllers\Admin\ProfileController::class)->middleware(['auth', 'verified']);
Route::resource('tareas', App\Http\Controllers\TareaController::class)->middleware(['auth', 'verified']);
Route::resource('tasks', App\Http\Controllers\Admin\TaskController::class)->middleware(['auth', 'verified']);
Route::resource('markers', App\Http\Controllers\Admin\MarkerController::class)->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
