<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Debt extends Model
{
    protected $fillable = ['name', 'course', 'semester', 'month', 'value', 'status', 'student_id', 'school_id'];

    function student() {
        return $this->belongsTo(\App\Models\Student::class, 'student_id');
    }

    function school() {
        return $this->belongsTo(\App\Models\School::class, 'school_id');
    }

    use HasFactory;
}
