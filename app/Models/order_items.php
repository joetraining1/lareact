<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_items extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'product_id',
        'order_qty',
        'order_cost'];

    public function app_user()
    {
        return $this->belongsTo(app_user::class);
    }

    public function order()
    {
        return $this->belongsTo(order::class);
    }
}
