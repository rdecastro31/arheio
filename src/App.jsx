import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Unauthorized from './pages/Unauthorized'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

         <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
            </Route>
      
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App 