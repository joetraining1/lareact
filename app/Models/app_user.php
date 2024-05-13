<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class app_user extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'email', 'password', 'type'];

    public function departemen()
    {
        return $this->belongsTo(departemen::class);
    }

    public function shipment()
    {
        return $this->belongsTo(shipment::class);
    }

    public function transaksi()
    {
        return $this->belongsTo(transaksi::class);
    }

    public function document()
    {
        return $this->hasMany(document::class);
    }

    public function order()
    {
        return $this->hasMany(order::class);
    }

    public function document_info()
    {
        return $this->hasMany(document_info::class);
    }

    public function employment()
    {
        return $this->hasOne(user_employment::class);
    }

    public function profile()
    {
        return $this->hasOne(user_profile::class);
    }
}
