import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BhoomiForm from './BhoomiForm'
import Dashboard from './Dashboard'
import RequestDetail from './RequestDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingpage" element={<Navigate to="/" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/request" element={<BhoomiForm />} />
      <Route path="/request/:id" element={<RequestDetail />} />
      {/* Catch-all route to redirect unknown paths to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
