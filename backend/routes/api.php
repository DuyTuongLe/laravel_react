<?php
use App\Http\Controllers\Api\HqvBanghiController;

Route::get('/banghi', [HqvBanghiController::class, 'index']);
Route::post('/banghi', [HqvBanghiController::class, 'store']);
Route::put('/banghi/{id}', [HqvBanghiController::class, 'update']);
Route::delete('/banghi/{id}', [HqvBanghiController::class, 'destroy']);