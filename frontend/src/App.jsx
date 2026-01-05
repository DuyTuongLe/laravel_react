import { useEffect, useState } from 'react';
import { getBanghi } from './api/banghi';

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBanghi()
      .then(data => setList(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Đang tải...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách bản ghi</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kiểu</th>
            <th>Chức năng</th>
            <th>Chức năng ID</th>
            <th>Nội dung</th>
            <th>Ngày tạo</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.kieu}</td>
              <td>{item.chucnang}</td>
              <td>{item.chucnangId}</td>
              <td>{item.noidung}</td>
              <td>{item.ngaytao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
