<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvDanduong extends Model
{
    //
    protected $table = 'hqv_danduong';
    protected $primaryKey = 'danduong_id';
    public $incrementing = true;
    protected $keyType = 'int'; 

    const CREATED_AT = 'ngay_tao';
    const UPDATED_AT = 'ngay_thaydoi';

    public function danduong_nn() {
        return $this->hasOne(
            HqvDanduong_nn::class,
            'danduong_id',
            'danduong_id' 
        );
    }
}
