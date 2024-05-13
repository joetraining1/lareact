<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class supplier extends Model
{
    use HasFactory;

    protected $fillable = ['supplier_id', 'supplier_nama', 'supplier_kontak', 'supplier_alamat'];

    public function transaksi()
    {
        return $this->hasMany(transaksi::class);
    }
}
