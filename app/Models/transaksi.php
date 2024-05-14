<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaksi extends Model
{
    use HasFactory;

    protected $fillable = [
        'transaksi_id',
        'transaksi_ref',
        'order_id',
        'supplier_id',
        'document_id',
        'transaksi_cost',
        'transaksi_date',
        'modified_by'];

    public function app_user()
    {
        return $this->belongsTo(app_user::class);
    }

    public function order()
    {
        return $this->belongsTo(order::class);
    }

    public function supplier()
    {
        return $this->belongsTo(supplier::class);
    }

    public function document()
    {
        return $this->belongsTo(document::class);
    }
}
