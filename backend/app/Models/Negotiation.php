<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Negotiation extends Model
{
    protected $fillable = ['proposal', 'accepted', 'finished', 'student_id', 'debt_id'];

    function student() {
        return $this->belongsTo(\App\Models\Student::class, 'student_id');
    }

    function debt() {
        return $this->belongsTo(\App\Models\Debt::class, 'debt_id');
    }
    
    use HasFactory;
}
