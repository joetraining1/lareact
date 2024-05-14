<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class app_user extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'email',
        'password',
        'type'];

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

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
