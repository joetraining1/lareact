<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'kategori_id', 'product_name', 'product_harga', 'product_deskripsi'];

    public function order_item()
    {
        return $this->hasMany(order_item::class);
    }

    public function kategori()
    {
        return $this->belongsTo(kategori::class);
    }
}
