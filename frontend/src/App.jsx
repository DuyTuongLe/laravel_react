import { useEffect, useState } from 'react';
import { getBanghi, createBanghi } from './api/banghi';
import { Routes, Route, Link } from 'react-router-dom'
import Cauhinh from './pages/Cauhinh'
import Danduong from './pages/Danduong'

function App() {
  return (
    <>
      <nav className="flex flex-col" style={{ padding: 10 }}>
        <Link to="/cauhinh">Cấu hình</Link>
        <Link to="/danduong">Dẫn đường</Link>
      </nav>

      <Routes>
        <Route path="/cauhinh" element={<Cauhinh />} />
        <Route path="/danduong" element={<Danduong />} />
      </Routes>
    </>
  )
}

export default App