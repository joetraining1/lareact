<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class departemen extends Model
{
    use HasFactory;

    protected $fillable = ['departemen_id', 'departemen_nama', 'lokasi'];

    // public function offdays(){
    //     return $this->hasMany(Offday::class);
    // }
}
