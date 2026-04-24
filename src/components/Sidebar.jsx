import { NavLink } from 'react-router-dom'
import {
  FiGrid,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiFileText,
  FiShield,
  FiLogOut,
  FiX,
  FiServer,
  FiPaperclip
} from 'react-icons/fi'
import '../styles/sidebar.css'

export default function Sidebar({ isOpen, onClose }) {
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-top">
        <div className="brand-box">
          <div className="brand-logo">W</div>
          <div className="brand-text">
            <h2>WindowsTemplate</h2>
            <p>Management Portal</p>
          </div>

          <button className="sidebar-close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>
      </div>

      <div className="sidebar-divider" />

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="nav-item" onClick={onClose}>
          <FiGrid />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/users" className="nav-item" onClick={onClose}>
          <FiPaperclip />
          <span>Transactions</span>
        </NavLink>

        <NavLink to="/users" className="nav-item" onClick={onClose}>
          <FiServer />
          <span>Workspace</span>
        </NavLink>

        <NavLink to="/users" className="nav-item" onClick={onClose}>
          <FiUsers />
          <span>Users</span>
        </NavLink>

        <NavLink to="/reports" className="nav-item" onClick={onClose}>
          <FiBarChart2 />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/documents" className="nav-item" onClick={onClose}>
          <FiFileText />
          <span>Documents</span>
        </NavLink>

        <NavLink to="/security" className="nav-item" onClick={onClose}>
          <FiShield />
          <span>Security</span>
        </NavLink>

        <NavLink to="/settings" className="nav-item" onClick={onClose}>
          <FiSettings />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="sidebar-divider" />

      <div className="sidebar-bottom">
        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}