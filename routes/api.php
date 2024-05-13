<?php

use App\Http\Controllers\AppUserController;
use App\Http\Controllers\DepartemenController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\DocumentInfoController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShipmentController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\TransaksiController;
use App\Http\Controllers\UserEmploymentController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1/')->group(function () {
    Route::controller(AppUserController::class)->group(function () {
        Route::prefix('account/')->group(function () {
            Route::controller(UserProfileController::class)->group(function () {

            });

            Route::controller(UserEmploymentController::class)->group(function () {

            });

        });
    });

    Route::controller(OrderController::class)->group(function () {
        Route::prefix('order/')->group(function () {
            Route::controller(OrderItemsController::class)->group(function () {

            });
        });
    });

    Route::controller(DocumentController::class)->group(function () {
        Route::prefix('docs/')->group(function () {
            Route::controller(DocumentInfoController::class)->group(function () {

            });
        });
    });

    Route::controller(ShipmentController::class)->group(function () {
    });
    Route::controller(SupplierController::class)->group(function () {
    });
    Route::controller(TransaksiController::class)->group(function () {
    });
    Route::controller(DepartemenController::class)->group(function () {
    });
    Route::controller(KategoriController::class)->group(function () {
    });
    Route::controller(ProductController::class)->group(function () {
    });

});

Route::get('welcomeApi', function (Request $request) {
    return response()->json([
        'status' => 'success',
        'message' => "you're connected to this api.",
    ]);
});
