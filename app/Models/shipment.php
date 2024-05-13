<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class shipment extends Model
{
    use HasFactory;

    protected $fillable = ['shipment_id', 'order_id', 'transaksi_id', 'shipment_ref', 'document_id', 'shipment_cost', 'shipment_start', 'shipment_estimated', 'modified_by'];

    public function order()
    {
        return $this->belongsTo(order::class);
    }

    public function app_user()
    {
        return $this->belongsTo(app_user::class);
    }

    public function transaksi()
    {
        return $this->belongsTo(transaksi::class);
    }

    public function document()
    {
        return $this->belongsTo(document::class);
    }
}
