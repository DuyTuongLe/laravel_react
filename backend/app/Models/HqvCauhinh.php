<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvCauhinh extends Model
{
    //
    public $timestamps = false;
    
    protected $table = 'hqv_cauhinh';

    protected $fillable = [
        'khoa',
        'ten',
        'giatri',
        'mota'
    ];
}
