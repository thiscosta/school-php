<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sponsor extends Model
{
    protected $fillable = ['name', 'user_id'];

    function user() {
        return $this->belongsTo(\App\Models\User::class, 'user_id');
    }

    use HasFactory;
}
