<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvMorong extends Model
{
    //
    protected $table = 'hqv_morong';
    protected $primaryKey = 'id';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = null;

    protected $fillable = [
        'ten',
        'mota',
        'kieu',
        'thamso',
        'phienban',
        'xuatban',
        'thutu'
    ];
}
