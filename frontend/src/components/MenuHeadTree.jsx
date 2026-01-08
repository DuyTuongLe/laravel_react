import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMenuFull } from '../api/danduong'

function MenuHeadTree() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMenuFull()
      .then(res => setList(res.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  function renderMenu(items, level = 0) {
    return (
        <ul className={`flex gap-6 menu-level-${level}`}>
        {items.map(item => (
            <li key={item.id}>
            <Link to={item.hash || '#'}>
                {item.tieude}
            </Link>

            {item.children?.length > 0 &&
                renderMenu(item.children, level + 1)
            }
            </li>
        ))}
        </ul>
    )
    }


  if (loading) return null

  return (
    <nav className="menu-head">
      {renderMenu(list)}
    </nav>
  )
}

export default MenuHeadTree
