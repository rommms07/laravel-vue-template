<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\GuestController;
use App\Http\Controllers\Auth\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function() {

    Route::get('/auth/user', fn(Request $request) => $request->user());
    Route::put('/auth/logout', [ UserController::class, 'logout' ]);

});

Route::post('/guest/login', [ GuestController::class, 'authenticate' ])
    ->name('guest:login');
