<?php

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

Route::post('users', 'User@postAdd');

Route::post('games', 'Game@postAdd');
Route::get('games/{username}', 'Game@getGames');
Route::get('games/{username}/{game_id}', 'Game@getGame');
Route::patch('games/update', 'Game@patchUpdate');
