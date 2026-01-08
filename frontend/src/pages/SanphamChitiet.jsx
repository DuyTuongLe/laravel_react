import { useEffect, useState } from 'react';
import { getSanphamChitiet } from '../api/sanpham_chitiet';
import { useParams } from 'react-router-dom';
import productImg from '../assets/product.jpg';

function SanphamChitiet() {
    const { hash } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSanphamChitiet(hash)
            .then(data => setItem(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [hash]);

    if (loading) return <p>Đang tải...</p>;
    if (!item) return <p>Không tìm thấy sản phẩm</p>;

    return (
        <div className="max-w-[1320px] mx-auto px-2">
            <div className="grid grid-cols-2 gap-6 mt-5">
                <div>
                    <img src={productImg} className="w-full rounded" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold mb-3">
                        {item.san_pham_nn?.ten}
                    </h1>

                    <p className="text-gray-600 mb-4">
                        {item.san_pham_nn?.mota}
                    </p>

                    <div
                        className="prose"
                        dangerouslySetInnerHTML={{
                            __html: item.san_pham_nn?.noidung
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default SanphamChitiet;
