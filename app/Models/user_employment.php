<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_employment extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'departemen_id', 'jabatan', 'posisi'];

    public function app_user()
    {
        return $this->belongsTo(app_user::class);
    }

    public function departemen()
    {
        return $this->belongsTo(departemen::class);
    }
}
