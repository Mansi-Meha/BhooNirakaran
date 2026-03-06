import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BhoomiForm from './BhoomiForm'
import Dashboard from './Dashboard'
import RequestDetail from './RequestDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/request" element={<BhoomiForm />} />
      <Route path="/request/:id" element={<RequestDetail />} />
    </Routes>
  )
}

export default App
