import { useEffect, useState } from 'react';
import { getDanduong } from '../api/danduong';

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDanduong()
      .then(res => setList(res.data))
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
            <tr key={item.danduong_id}>
              <td>{item.goc_id}</td>
              <td>{item.kieu}</td>
              <td>{item.danduong_nn?.tieude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
