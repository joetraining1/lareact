<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class document_info extends Model
{
    use HasFactory;

    protected $fillable = ['document_id', 'document_ref', 'kategori_id', 'departemen_id', 'document_judul', 'document_agenda', 'document_date', 'modified_by'];

    public function document()
    {
        return $this->belongsTo(document::class);
    }

    public function kategori()
    {
        return $this->belongsTo(kategori::class);
    }

    public function departemen()
    {
        return $this->belongsTo(departemen::class);
    }

    public function app_user()
    {
        return $this->belongsTo(app_user::class);
    }
}
