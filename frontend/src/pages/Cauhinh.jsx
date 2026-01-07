import { useEffect, useState } from 'react';
import { getCauhinh } from '../api/cauhinh';
import '../index.css'; 

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCauhinh()
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
              <div className="w-[20%]">{item.khoa}</div>
              <div className="w-[30%]">{item.ten}</div>
              <div className="w-[20%]">{item.giatri}</div>
              <div className="w-[20%]">{item.mota}</div>
            </div>
          ))}
      </div>

    </div>
  );
}

export default App;
