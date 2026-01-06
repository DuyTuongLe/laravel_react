<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HqvDanduong;
use App\Models\HqvDanduong_nn;


class HqvDanduongController extends Controller
{
    //
    public function index() {
        $data = HqvDanduong::select([
            'danduong_id',
            'goc_id',
            'kieu'
        ])
        ->where('kieu', 'product')
        ->with([
            'danduong_nn' => function($q) {
                $q->select([
                    'id',
                    'danduong_id',
                    'tieude'
                ]);
            }
        ])
        ->get();

        return response()->json([
            'status' => true,
            'data' => $data
        ]);
    }
}
