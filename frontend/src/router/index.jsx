import { Routes, Route } from 'react-router-dom'
import Cauhinh from '../pages/Cauhinh'
import Danduong from '../pages/Danduong'
import Morong from '../pages/Morong'
import Sanpham from '../pages/Sanpham'
import SanphamChitiet from '../pages/SanphamChitiet'
import MainLayout from '../layouts/MainLayout'

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/cauhinh" element={<Cauhinh />} />
        <Route path="/danduong" element={<Danduong />} />
        <Route path="/morong" element={<Morong />} />
        <Route path="/san-pham" element={<Sanpham />} />
        <Route path="/:hash" element={<SanphamChitiet />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
