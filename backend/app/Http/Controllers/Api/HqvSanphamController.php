<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HqvSanpham;
use App\Models\HqvSanpham_nn;

class HqvSanphamController extends Controller
{
    //
    public function index() {
        return response()->json(
            HqvSanpham::select('id','hash', 'ma')
            ->with('sanPham_nn:sanpham,ten,mota,noidung,khac')
            ->orderBy('thutu')
            ->paginate(24)
        );
    }

    public function show($hash) {
        return response()->json(
            HqvSanpham::with('sanPham_nn:sanpham,ten,mota,noidung,khac')
            ->where('hash', $hash)
            ->firstOrFail()

        );
    }
}
