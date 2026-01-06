<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HqvDanduong;
use App\Models\HqvDanduong_nn;
use App\Services\MenuService;


class HqvDanduongController extends Controller
{
    //
    protected $menu;

    public function __construct(MenuService $menu)
    {
        $this->menu = $menu;
    }

    /**
     * Menu full
     */
    public function full()
    {
        return response()->json([
            'status' => 'success',
            'data' => $this->menu->full()
        ]);
    }

    /**
     * Menu theo kieu
     */
    public function byKieu(string $kieu)
    {
        return response()->json([
            'status' => 'success',
            'data' => $this->menu->byKieu($kieu)
        ]);
    }
}
