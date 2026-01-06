import { useEffect, useState } from 'react';
import { getCauhinh } from '../api/cauhinh';

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
    <div style={{ padding: 20 }}>
      <h2>Danh sách bản ghi</h2>

      <table border="1" cellPadding="8">
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.khoa}</td>
              <td>{item.ten}</td>
              <td>{item.giatri}</td>
              <td>{item.mota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
