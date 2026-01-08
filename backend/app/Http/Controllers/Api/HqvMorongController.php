<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HqvMorong;

class HqvMorongController extends Controller
{
    //
    public function index() 
    {
        return response()->json (
            HqvMorong::orderBy('thutu', 'asc')->get()
        );
    }
}
