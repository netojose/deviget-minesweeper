<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['username'];
    
    public function games()
    {
        return $this->hasMany(\App\Models\Game::class);
    }
}
