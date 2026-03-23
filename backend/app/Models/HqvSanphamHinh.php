<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvSanphamHinh extends Model
{
    //
    protected $table = "hqv_sanpham_hinhanh";
    protected $primaryKey = "id";

    const CREATED_AT = "ngaytao";
    const UPDATED_AT = "ngaythaydoi";

    public function sanPham_ha () {
        
    }
}
