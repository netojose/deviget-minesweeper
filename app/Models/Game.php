<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        "user_id", 
        "rows", 
        "columns", 
        "mines", 
        "elements", 
        "duration",
        "finished"
    ];
    
    protected $casts = [
        "elements" => "array"
    ];
}
