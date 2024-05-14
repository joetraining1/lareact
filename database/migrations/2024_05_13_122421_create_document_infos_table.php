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
        Schema::create('document_infos', function (Blueprint $table) {
            $table->id();
            $table->string('document_id');
            $table->string('document_ref');
            $table->string('document_judul');
            $table->string('kategori_id');
            $table->string('document_agenda');
            $table->string('departemen_id');
            $table->string('document_date');
            $table->string('modified_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('document_infos');
    }
};
