<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;

    protected $fillable = ['order_id', 'departemen_id', 'document_id', 'requester', 'purpose', 'expense', 'modified_by'];

    public function app_user()
    {
        return $this->hasMany(app_user::class);
    }

    public function departemen()
    {
        return $this->belongsTo(departemen::class);
    }

    public function document()
    {
        return $this->belongsTo(document::class);
    }
}
