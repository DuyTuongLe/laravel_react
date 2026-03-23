<?php

namespace App\Services;

use App\Models\HqvDanduong;

class MenuService
{
    public function full()
    {
        $items = HqvDanduong::query()
            ->select([
                'danduong_id',
                'goc_id',
                'kieu',
                'sapxep',
                'hinhanh',
            ])
            ->where('danduong_nhom', 1)
            ->with([
                'danduong_nn:id,danduong_id,tieude,mota',
                'danduong_url:id,rel,hash'
            ])
            ->orderBy('sapxep')
            ->get();

        return $this->buildTree($items);
    }

    /**
     * Menu theo kieu (product)
     */
    public function byKieu(string $kieu)
    {
        // 1️⃣ Lấy toàn bộ menu
        $items = HqvDanduong::query()
            ->select([
                'danduong_id',
                'goc_id',
                'kieu',
                'sapxep',
                'hinhanh'
            ])
            ->with('danduong_nn:id,danduong_id,tieude,mota')
            ->orderBy('sapxep')
            ->get();

        // 2️⃣ Lọc menu theo kieu
        $filtered = $items->where('kieu', $kieu);

        // 3️⃣ Gom cả cha để không vỡ cây
        $neededIds = collect();

        foreach ($filtered as $item) {
            $current = $item;
            while ($current && !$neededIds->contains($current->danduong_id)) {
                $neededIds->push($current->danduong_id);
                $current = $items->firstWhere(
                    'danduong_id',
                    $current->goc_id
                );
            }
        }

        // 4️⃣ Đây mới là FINAL
        $finalItems = $items->whereIn('danduong_id', $neededIds);

        // 5️⃣ Build tree
        return $this->buildTree($finalItems);
    }

    protected function buildTree($items, $parentId = 0)
    {
        $branch = [];

        foreach ($items as $item) {
            if ($item->goc_id == $parentId) {
                $branch[] = [
                    'id' => $item->danduong_id,
                    'goc_id' => $item->goc_id,
                    'kieu' => $item->kieu,
                    'tieude' => optional($item->danduong_nn)->tieude,
                    'mota' => optional($item->danduong_nn)->mota,
                    'hash' => optional($item->danduong_url)->hash,
                    'hinhanh' => $item->hinhanh,
                    'children' => $this->buildTree($items, $item->danduong_id)
                ];
            }
        }

        return $branch;
    }
}
