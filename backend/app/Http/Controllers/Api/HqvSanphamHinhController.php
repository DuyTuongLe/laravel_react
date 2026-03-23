<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HqvSanphamHinh;

class HqvSanphamHinhController extends Controller
{
    //
    public function index() {
        return response()->json(
            HqvSanphamHinh::select('id','sanpham','ten')
            ->get()
        );
    }

}
