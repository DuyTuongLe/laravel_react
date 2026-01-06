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
        $validated = $request->validate([
            'kieu'        => 'required|string|max:255',
            'chucnang'    => 'required|string|max:255',
            'chucnangId'  => 'required|integer',
            'noidung'     => 'required|string',
        ]);
        $item = HqvBanghi::create($validated);

        return response()->json($item, 201);
    }

    public function update(Request $request, $id) {

        $item = HqvBanghi::findOrFail($id);

        $validated = $request->validate([
            'kieu'        => 'required|string|max:255',
            'chucnang'    => 'required|string|max:255',
            'chucnangId'  => 'required|integer',
            'noidung'     => 'required|string',
        ]);

        $item->update($validated);

        return response()->json($item, 200);
    }

    public function destroy($id)
    {
        $item = HqvBanghi::findOrFail($id);
        
        $item->delete();

        return response()->json([
            'success' => true,
            'message' => 'Deleted successfully'
        ], 200);
    }
}
