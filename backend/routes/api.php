<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HqvBanghiController;
use App\Http\Controllers\Api\HqvCauhinhController;
use App\Http\Controllers\Api\HqvDanduongController;

Route::get('/banghi', [HqvBanghiController::class, 'index']);
Route::post('/banghi', [HqvBanghiController::class, 'store']);
Route::put('/banghi/{id}', [HqvBanghiController::class, 'update']);
Route::delete('/banghi/{id}', [HqvBanghiController::class, 'destroy']);
Route::get('/cauhinh', [HqvCauhinhController::class, 'index']);

Route::prefix('menu')->group(function () {
    Route::get('/full', [HqvDanduongController::class, 'full']);
    Route::get('/kieu/{kieu}', [HqvDanduongController::class, 'byKieu']);
});