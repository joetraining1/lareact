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
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();
            $table->string('order_id');
            $table->string('transaksi_id');
            $table->string('shipment_id')->unique();
            $table->string('shipment_ref');
            $table->string('shipment_cost');
            $table->string('shipment_start');
            $table->string('shipment_estimated');
            $table->string('document_id');
            $table->string('modified_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipments');
    }
};
