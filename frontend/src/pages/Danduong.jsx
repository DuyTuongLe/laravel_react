import { useEffect, useState, Fragment } from 'react';
import { getMenuProduct } from '../api/danduong';

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMenuProduct()
      .then(res => setList(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  function renderRows(items, level = 0) {
    return items.map(item => (
      <Fragment key={item.id}>
        <tr>
          <td style={{ paddingLeft: level * 20 }}>
            {item.tieude}
          </td>
        </tr>

        {item.children?.length > 0 &&
          renderRows(item.children, level + 1)}
      </Fragment>
    ));
  }

  if (loading) return <p>Đang tải...</p>;

  return (
    <div className="p-4">
      <h2>Danh sách menu</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Tiêu đề</th>
          </tr>
        </thead>
        <tbody>
          {renderRows(list)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
