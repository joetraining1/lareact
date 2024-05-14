<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class departemen extends Model
{
    use HasFactory;

    protected $fillable = [
        'departemen_id',
        'departemen_name',
        'lokasi'];

    public function employment()
    {
        return $this->hasMany(user_employment::class);
    }

    public function document_info()
    {
        return $this->hasMany(document_info::class);
    }

    public function order()
    {
        return $this->hasMany(order::class);
    }
}
