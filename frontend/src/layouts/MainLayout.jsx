import { Outlet, Link } from 'react-router-dom'
import MenuHeadTree from '../components/MenuHeadTree'

function MainLayout() {
  return (
    <>
      <header className="header">
        <div className='max-w-[1320px] mx-auto px-2'>
          <MenuHeadTree />
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout