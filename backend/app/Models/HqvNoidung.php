<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvNoidung extends Model
{
    //
    protected $table = 'hqv_noidung';
    protected $primaryKey = 'id';

    const CREATED_AT = 'ngaytao';
    const UPDATED_AT = 'ngaysua';

    public function danduong() {
        return $this->belongsTo(HqvDanduong::class, 'danduong', 'danduong_id');
    }
}
