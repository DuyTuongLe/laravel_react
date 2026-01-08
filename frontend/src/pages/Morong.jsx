import { useEffect, useState } from 'react';
import { getMorong } from '../api/morong';
import '../index.css'; 

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMorong()
      .then(data => setList(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Đang tải...</p>;

  return (
    <div className='container'>
      <h2>Danh sách bản ghi</h2>
      <div className='kkk'>
        {list.map(item => (
            <div className='flex p-4' key={item.id}>
              <div className="w-[10%]">{item.id}</div>
              <div className="w-[10%]">{item.ten}</div>
              <div className="w-[10%]">{item.mota}</div>
              <div className="w-[10%]">{item.kieu}</div>
              <div className="w-[10%]">{item.thamso}</div>
              <div className="w-[10%]">{item.ngaytao}</div>
              <div className="w-[10%]">{item.phienban}</div>
              <div className="w-[10%]">{item.xuatban}</div>
              <div className="w-[10%]">{item.thutu}</div>
            </div>
          ))}
      </div>

    </div>
  );
}

export default App;
