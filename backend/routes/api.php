<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SchoolController;
use App\Http\Controllers\SponsorController;
use App\Http\Controllers\DebtController;
use App\Http\Controllers\NegotiationController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::fallback(function(){
    return response()->json(['message' => 'Page Not Found'], 404);
});

Route::get('/students', [StudentController::class, 'getAll']);
Route::get('/students/{id}', [StudentController::class, 'get']);
Route::post('/students', [StudentController::class, 'create']);
Route::put('/students/{id}', [StudentController::class, 'update']);
Route::delete('/students/{id}', [StudentController::class, 'delete']);

Route::get('/users', [UserController::class, 'getAll']);
Route::get('/users/{id}', [UserController::class, 'get']);
Route::post('/users', [UserController::class, 'create']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'delete']);

Route::get('/schools', [SchoolController::class, 'getAll']);
Route::get('/schools/{id}', [SchoolController::class, 'get']);
Route::post('/schools', [SchoolController::class, 'create']);
Route::put('/schools/{id}', [SchoolController::class, 'update']);
Route::delete('/schools/{id}', [SchoolController::class, 'delete']);

Route::get('/sponsors', [SponsorController::class, 'getAll']);
Route::get('/sponsors/{id}', [SponsorController::class, 'get']);
Route::post('/sponsors', [SponsorController::class, 'create']);
Route::put('/sponsors/{id}', [SponsorController::class, 'update']);
Route::delete('/sponsors/{id}', [SponsorController::class, 'delete']);

Route::get('/debts', [DebtController::class, 'getAll']);
Route::get('/debts/{id}', [DebtController::class, 'get']);
Route::post('/debts', [DebtController::class, 'create']);
Route::put('/debts/{id}', [DebtController::class, 'update']);
Route::delete('/debts/{id}', [DebtController::class, 'delete']);

Route::get('/negotiations', [NegotiationController::class, 'getAll']);
Route::get('/negotiations/{id}', [NegotiationController::class, 'get']);
Route::post('/negotiations', [NegotiationController::class, 'create']);
Route::put('/negotiations/{id}', [NegotiationController::class, 'update']);
Route::delete('/negotiations/{id}', [NegotiationController::class, 'delete']);
