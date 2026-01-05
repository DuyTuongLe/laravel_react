<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvBanghi extends Model
{
    //
    const CREATED_AT = 'ngaytao';
    const UPDATED_AT = null;

    protected $table = 'hqv_banghi';

    protected $fillable = [
        'kieu',
        'chucnang',
        'chucnangId',
        'noidung'
    ];
}
