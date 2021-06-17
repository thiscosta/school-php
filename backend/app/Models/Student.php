<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    
    protected $fillable = ['name', 'email', 'course', 'semester', 'responsible', 'user_id', 'zip-code', 'zipcode', 'street', 'number', 'neighborhood', 'city', 'state', 'number'];

    function user() {
        return $this->belongsTo(\App\Models\User::class, 'user_id');
    }

    use HasFactory;
}
