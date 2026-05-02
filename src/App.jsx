import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Classification from './pages/Classification'
import Departments from './pages/Departments'
import Types from './pages/Types'
import Home from './pages/Home'
import Login from './pages/Login'
import Unauthorized from './pages/Unauthorized'
import Layout from './components/Layout'
import Workspace from './pages/Workspace'
import Storage from './pages/Storage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/types" element={<Types />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App 