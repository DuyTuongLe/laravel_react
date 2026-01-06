<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HqvCauhinh;

class HqvCauhinhController extends Controller
{
    //
    public function index() 
    {
        return response()->json (
            HqvCauhinh::orderBy('id', 'desc')->get()
        );
    }
}
