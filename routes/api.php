<?php

use App\Http\Controllers\AppUserController;
use App\Http\Controllers\AuthController;
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
    Route::prefix('auth/')->group(function () {
        Route::controller(AuthController::class)->group(function () {
            Route::get('home-welcome/{id}', 'testApi');
            Route::post('login', 'login');
            Route::post('register', 'register');
            Route::post('logout', 'logout');
            Route::post('refresh', 'refresh');
        });
    });

    Route::controller(AppUserController::class)->group(function () {
        Route::prefix('account/')->group(function () {
            Route::controller(UserProfileController::class)->group(function () {
                Route::post('search', 'SearchQuery');
                Route::get('profiles', 'index');
                Route::get('profile/{id}', 'show');
                Route::post('profile', 'store');
                Route::put('profile/{id}', 'update');
                Route::delete('profile/{id}', 'destroy');
            });

            Route::controller(UserEmploymentController::class)->group(function () {
                Route::get('employments', 'index');
                Route::post('employment', 'store');
                Route::get('employment/{id}', 'show');
                Route::put('employment/{id}', 'update');
                Route::delete('employment/{id}', 'destroy');
            });
        });

        Route::get('accounts', 'index');
        Route::post('account', 'store');
        Route::put('account/{id}', 'update');
        Route::delete('account/{id}', 'destroy');
    });

    Route::controller(OrderController::class)->group(function () {
        Route::prefix('order/')->group(function () {
            Route::controller(OrderItemsController::class)->group(function () {
                Route::get('items/{id}', 'index');
                Route::post('item', 'store');
                Route::put('item/{id}', 'update');
                Route::delete('item/{id}', 'destroy');
            });
        });

        Route::post('orders/search', 'SearchQuery');
        Route::get('orders', 'index');
        Route::get('order/{id}', 'show');
        Route::post('orders', 'store');
        Route::put('order/{id}', 'update');
        Route::delete('order/{id}', 'destroy');
    });

    Route::controller(DocumentController::class)->group(function () {
        Route::prefix('docs/')->group(function () {
            Route::controller(DocumentInfoController::class)->group(function () {
                Route::get('info/{id}', 'show');
                Route::post('info/{id}', 'store');
                Route::put('info/{id}', 'update');
                Route::delete('info/{id}', 'destroy');
            });
        });

        Route::post('docs/search', 'SearchQuery');
        Route::get('docs', 'index');
        Route::get('doc/{id}', 'show');
        Route::post('doc', 'store');
        Route::put('doc/{id}', 'update');
        Route::delete('doc/{id}', 'destroy');
    });

    Route::controller(ShipmentController::class)->group(function () {
        Route::post('shipments/search', 'SearchQuery');
        Route::get('shipments/{id}', 'index');
        Route::get('shipment/{id}', 'show');
        Route::post('shipment', 'store');
        Route::put('shipment/{id}', 'update');
        Route::delete('shipment/{id}', 'destroy');
    });
    Route::controller(SupplierController::class)->group(function () {
        Route::post('suppliers/search', 'SearchQuery');
        Route::get('suppliers', 'index');
        Route::get('supplier/{id}', 'show');
        Route::post('supplier', 'store');
        Route::put('supplier/{id}', 'update');
        Route::delete('supplier/{id}', 'destroy');
    });
    Route::controller(TransaksiController::class)->group(function () {
        Route::post('transaksis/search', 'SearchQuery');
        Route::get('transaksis/{id}', 'index');
        Route::get('transaksi/{id}', 'show');
        Route::post('transaksi', 'store');
        Route::put('transaksi/{id}', 'update');
        Route::delete('transaksi/{id}', 'destroy');
    });

    Route::controller(DepartemenController::class)->group(function () {
        Route::post('departemens/search', 'SearchQuery');
        Route::get('departemens', 'index');
        Route::get('departemen/{id}', 'show');
        Route::post('departemen', 'store');
        Route::put('departemen/{id}', 'update');
        Route::delete('departemen/{id}', 'destroy');
    });

    Route::controller(KategoriController::class)->group(function () {
        Route::post('kategoris/search', 'SearchQuery');
        Route::get('kategoris', 'index');
        Route::get('kategori/{id}', 'show');
        Route::post('kategori', 'store');
        Route::put('kategori/{id}', 'update');
        Route::delete('kategori/{id}', 'destroy');
    });

    Route::controller(ProductController::class)->group(function () {
        Route::post('products/search', 'SearchQuery');
        Route::get('products', 'index');
        Route::get('product/{id}', 'show');
        Route::post('product', 'store');
        Route::put('product/{id}', 'update');
        Route::delete('product/{id}', 'destroy');
    });

});

Route::get('welcomeApi', function (Request $request) {
    return response()->json([
        'status' => 'success',
        'message' => "you're connected to this api.",
    ]);
});
