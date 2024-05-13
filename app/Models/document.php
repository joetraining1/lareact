<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class document extends Model
{
    use HasFactory;

    protected $fillable = ['document_id', 'document_path', 'document_file', 'document_url', 'created_by', 'modified_by', 'modified_at'];

    public function document_info()
    {
        return $this->hasOne(document_info::class);
    }

    public function transaksi()
    {
        return $this->hasOne(transaksi::class);
    }

    public function shipment()
    {
        return $this->hasOne(shipment::class);
    }

    public function app_user()
    {
        return $this->hasMany(app_user::class);
    }
}
