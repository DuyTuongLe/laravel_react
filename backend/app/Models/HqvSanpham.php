<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvSanpham extends Model
{
    //
    protected $table = 'hqv_sanpham';
    protected $primaryKey = 'id';

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngaythaydoi';

    public function sanPham_nn() {
        return $this->hasOne(
            HqvSanpham_nn::class,
            'sanpham',
            'id'
        );
    }
}
