<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvSanpham_nn extends Model
{
    //
    protected $table = 'hqv_sanpham_ngonngu';
    protected $primaryKey = 'id';

    public $timestamps = false;

    public function sanPham() {
        return $this->belongsTo(
            HqvSanpham::class,
            'sanpham',
            'id'
        );
    }
}
