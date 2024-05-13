<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kategori extends Model
{
    use HasFactory;

    protected $fillable = ['kategori_id', 'kategori_nama', 'kategori_deskripsi'];

    public function document_info()
    {
        return $this->hasMany(document_info::class);
    }

    public function product()
    {
        return $this->hasMany(product::class);
    }
}
