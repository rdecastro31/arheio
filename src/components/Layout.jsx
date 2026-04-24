import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import '../styles/layout.css'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="app-shell">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <div className="main-section">
        <Header onToggleSidebar={toggleSidebar} />

        <main className="page-content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}