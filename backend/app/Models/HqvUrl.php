<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HqvUrl extends Model
{
    //
    public $timestamps = false;
    
    protected $table = 'hqv_url';
    protected $primaryKey = 'id';


    public function danduong() {
        return $this->belongsTo(HqvDanduong::class, 'rel', 'danduong_id');
    }
}
