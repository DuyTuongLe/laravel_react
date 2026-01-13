<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HqvDanduong;
use App\Models\HqvUrl;
use App\Models\HqvSanpham;
use Illuminate\Http\Request;

class ResolverController extends Controller
{
    public function resolve($hash)
    {
        /**
         * 1. TÌM URL
         */
        $url = HqvUrl::where('hash', $hash)->firstOrFail();

        /**
         * 2. LẤY ROUTE LOGIC
         */
        $route = HqvDanduong::where('danduong_id', $url->rel)->firstOrFail();

        /**
         * =========================
         * SẢN PHẨM
         * =========================
         */
        switch ($route->kieu) {

            case 'product':
                $sanpham = HqvSanpham::with(['sanPham_nn'])
                    ->find($route->goc_id);

                abort_if(!$sanpham, 404);

                return response()->json([
                    'type'  => 'product',
                    'data'  => $sanpham,
                    'route' => $route,
                    'url'   => $url
                ]);

            case 'tinh':
            case 'tin-tuc':
                $noidung = $route->noidung()
                    ->orderBy('thutu')
                    ->first();

                abort_if(!$noidung, 404);

                return response()->json([
                    'type'  => $route->kieu,
                    'data'  => $noidung,
                    'route' => $route,
                    'url'   => $url
                ]);
        }

        abort(404);
    }
}
