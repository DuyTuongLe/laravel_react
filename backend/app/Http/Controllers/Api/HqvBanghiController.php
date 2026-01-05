<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HqvBanghi;

class HqvBanghiController extends Controller
{
    //
    public function index() 
    {
        return response()->json (
            HqvBanghi::orderBy('id', 'desc')->get()
        );
    }

    public function store(Request $request)
    {
        $item = HqvBanghi::create(
            $request->only([
                'kieu',
                'chucnang',
                'chucnangId',
                'noidung'
            ])
        );

        return response()->json($item);
    }

    public function update(Request $request, $id) {
        HqvBanghi::findOrFail($id);

        $item = HqvBanghi::update(
            $request->only([
                'kieu',
                'chucnang',
                'chucnangId',
                'noidung'
            ])
        );

        return response()->json($item);
    }

    public function destroy($id)
    {
        HqvBanghi::destroy($id);

        return response()->json([
            'success' => true
        ]);
    }


}
