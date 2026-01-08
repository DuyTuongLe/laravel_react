import { useEffect, useState } from 'react';
import { getSanpham } from '../api/sanpham';
import productImg from '../assets/product.jpg';
import { Link } from 'react-router-dom'; 
import '../index.css';

function App() {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getSanpham(page)
            .then(res => {
            setList(res.data || []);
            setLastPage(res.last_page || 1);
            })
            .catch(err => {
            console.error(err);
            setList([]); 
            })
            .finally(() => setLoading(false));
    }, [page]);

    if (loading) return <p>Đang tải...</p>;

    return (
        <div className='container mx-auto'>
            <div className='kkk mt-5'>
                <div className="grid grid-cols-4 gap-2">
                    {list.map(item => (
                        <div className="item border-2 border-red-50 rounded-md p-3" key={item.id}>
                            <div className="item-image">
                                <Link to={`/sanpham/${item.hash}`}>
                                    <img className="image" src={productImg} alt={item.san_pham_nn?.ten} />
                                </Link>
                            </div>

                            <div className="item-info">
                                <Link
                                    to={`/sanpham/${item.hash}`}
                                    className="item-des_title font-bold line-clamp-2 my-1 block"
                                >
                                    {item.san_pham_nn?.ten}
                                </Link>

                                <p className="item-des_des line-clamp-4">
                                    {item.san_pham_nn?.mota}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>



            <div className="flex justify-center gap-3 mt-6">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(p => p - 1)}
                >
                    Prev
                </button>

                <span>{page} / {lastPage}</span>

                <button
                    disabled={page === lastPage}
                    onClick={() => setPage(p => p + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
