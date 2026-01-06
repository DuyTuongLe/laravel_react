<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvDanduong_nn extends Model
{
    //
    public $timestamps = false;
    
    protected $table = 'hqv_danduong_ngonngu';

    public function danduong() {
        return $this->belongsTo(HqvDanduong::class, 'danduong_id', 'danduong_id');
    }
}
