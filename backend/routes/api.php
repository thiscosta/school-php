<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SchoolController;
use App\Http\Controllers\SponsorController;
use App\Http\Controllers\DebtController;
use App\Http\Controllers\NegotiationController;
use App\Http\Controllers\LoginController;

Route::fallback(function(){
    return response()->json(['message' => 'Page Not Found'], 404);
});

Route::post('/login', [LoginController::class, 'doIt']);

Route::get('/students', [StudentController::class, 'getAll'])->middleware('auth:api');
Route::get('/students/{id}', [StudentController::class, 'get'])->middleware('auth:api');
Route::post('/students', [StudentController::class, 'create'])->middleware('auth:api');
Route::put('/students/{id}', [StudentController::class, 'update'])->middleware('auth:api');
Route::delete('/students/{id}', [StudentController::class, 'delete'])->middleware('auth:api');

Route::get('/users', [UserController::class, 'getAll'])->middleware('auth:api');
Route::get('/users/{id}', [UserController::class, 'get'])->middleware('auth:api');
Route::post('/users', [UserController::class, 'create']);
Route::put('/users/{id}', [UserController::class, 'update'])->middleware('auth:api');
Route::delete('/users/{id}', [UserController::class, 'delete'])->middleware('auth:api');

Route::get('/schools', [SchoolController::class, 'getAll'])->middleware('auth:api');
Route::get('/schools/{id}', [SchoolController::class, 'get'])->middleware('auth:api');
Route::post('/schools', [SchoolController::class, 'create'])->middleware('auth:api');
Route::put('/schools/{id}', [SchoolController::class, 'update'])->middleware('auth:api');
Route::delete('/schools/{id}', [SchoolController::class, 'delete'])->middleware('auth:api');

Route::get('/sponsors', [SponsorController::class, 'getAll'])->middleware('auth:api');
Route::get('/sponsors/{id}', [SponsorController::class, 'get'])->middleware('auth:api');
Route::post('/sponsors', [SponsorController::class, 'create'])->middleware('auth:api');
Route::put('/sponsors/{id}', [SponsorController::class, 'update'])->middleware('auth:api');
Route::delete('/sponsors/{id}', [SponsorController::class, 'delete'])->middleware('auth:api');

Route::get('/debts', [DebtController::class, 'getAll'])->middleware('auth:api');
Route::get('/debts/{id}', [DebtController::class, 'get'])->middleware('auth:api');
Route::post('/debts', [DebtController::class, 'create'])->middleware('auth:api');
Route::put('/debts/{id}', [DebtController::class, 'update'])->middleware('auth:api');
Route::delete('/debts/{id}', [DebtController::class, 'delete'])->middleware('auth:api');

Route::get('/negotiations', [NegotiationController::class, 'getAll'])->middleware('auth:api');
Route::get('/negotiations/{id}', [NegotiationController::class, 'get'])->middleware('auth:api');
Route::post('/negotiations', [NegotiationController::class, 'create'])->middleware('auth:api');
Route::put('/negotiations/{id}', [NegotiationController::class, 'update'])->middleware('auth:api');
Route::delete('/negotiations/{id}', [NegotiationController::class, 'delete'])->middleware('auth:api');
