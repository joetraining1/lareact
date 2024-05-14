<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('user_profiles', function (Blueprint $table) {
            $table->foreign('user_id')
                ->references('user_id')
                ->on('app_users')
                ->onDelete('cascade');
        });

        Schema::table('products', function (Blueprint $table) {
            $table->foreign('kategori_id')
                ->references('kategori_id')
                ->on('kategoris')
                ->onDelete('cascade');
        });

        Schema::table('user_employments', function (Blueprint $table) {
            $table->foreign('user_id')
                ->references('user_id')
                ->on('app_users')
                ->onDelete('cascade');

            $table->foreign('departemen_id')
                ->references('departemen_id')
                ->on('departemens')
                ->onDelete('cascade');
        });

        Schema::table('documents', function (Blueprint $table) {
            $table->foreign('created_by')
                ->references('user_id')
                ->on('app_users')
                ->onDelete('cascade');

            $table->foreign('modified_by')
                ->references('user_id')
                ->on('app_users')
                ->onDelete('cascade');
        });

        Schema::table('document_infos', function (Blueprint $table) {
            $table->foreign('modified_by')
                ->references('user_id')
                ->on('app_users')
                ->onDelete('cascade');

            $table->foreign('document_id')
                ->references('document_id')
                ->on('documents')
                ->onDelete('cascade');

            $table->foreign('departemen_id')
                ->references('departemen_id')
                ->on('departemens')
                ->onDelete('cascade');

            $table->foreign('kategori_id')
                ->references('kategori_id')
                ->on('kategoris')
                ->onDelete('cascade');
        });

        Schema::table('order_items', function (Blueprint $table) {
            $table->foreign('order_id')
                ->references('order_id')
                ->on('orders')
                ->onDelete('cascade');

            $table->foreign('product_id')
                ->references('product_id')
                ->on('products')
                ->onDelete('cascade');
        });

        Schema::table('orders', function (Blueprint $table) {
            $table->foreign('modified_by')
                ->references('user_id')
                ->on('app_users')
                ->onDelete('cascade');

            $table->foreign('requester')
                ->references('user_id')
                ->on('app_users')
                ->onDelete('cascade');

            $table->foreign('departemen_id')
                ->references('departemen_id')
                ->on('departemens')
                ->onDelete('cascade');

            $table->foreign('document_id')
                ->nullable()
                ->references('document_id')
                ->on('documents')
                ->onDelete('cascade');
        });

        Schema::table('transaksis', function (Blueprint $table) {
            $table->foreign('modified_by')
                ->references('user_id')
                ->on('app_users')
                ->onDelete('cascade');

            $table->foreign('order_id')
                ->references('order_id')
                ->on('orders')
                ->onDelete('cascade');

            $table->foreign('supplier_id')
                ->references('supplier_id')
                ->on('suppliers')
                ->onDelete('cascade');

            $table->foreign('document_id')
                ->nullable()
                ->references('document_id')
                ->on('documents')
                ->onDelete('cascade');
        });

        Schema::table('shipments', function (Blueprint $table) {
            $table->foreign('modified_by')
                ->references('user_id')
                ->on('app_users')
                ->onDelete('cascade');

            $table->foreign('order_id')
                ->references('order_id')
                ->on('orders')
                ->onDelete('cascade');

            $table->foreign('transaksi_id')
                ->references('transaksi_id')
                ->on('transaksis')
                ->onDelete('cascade');

            $table->foreign('document_id')
                ->nullable()
                ->references('document_id')
                ->on('documents')
                ->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_profiles', function (Blueprint $table) {
            $table->dropIfExists();
        });

        Schema::table('user_employments', function (Blueprint $table) {
            $table->dropIfExists();
        });

        Schema::table('documents', function (Blueprint $table) {
            $table->dropIfExists();
        });

        Schema::table('document_infos', function (Blueprint $table) {
            $table->dropIfExists();
        });

        Schema::table('order_items', function (Blueprint $table) {
            $table->dropIfExists();
        });

        Schema::table('orders', function (Blueprint $table) {
            $table->dropIfExists();
        });

        Schema::table('products', function (Blueprint $table) {
            $table->dropIfExists();
        });

        Schema::table('transaksis', function (Blueprint $table) {
            $table->dropIfExists();
        });

        Schema::table('shipments', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
};
