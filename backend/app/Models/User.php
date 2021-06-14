<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'name',
        'email',
        'password',
        'profile'
    ];
    protected $hidden = [
        'remember_token',
        'password',
        'api_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function students() {
        return $this->hasMany(\App\Models\Student::class, 'id');
    }
}
