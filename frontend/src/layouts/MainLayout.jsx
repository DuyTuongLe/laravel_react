import { Outlet, Link } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <nav className="flex gap-4 p-4 border-b">
        <Link to="/cauhinh">Cấu hình</Link>
        <Link to="/danduong">Dẫn đường</Link>
        <Link to="/morong">Mở rộng</Link>
        <Link to="/sanpham">Sản phẩm</Link>
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout