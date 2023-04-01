import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CurrentRequests from './components/CurrentRequests'
import OngoingStays from './components/OngoingStays'
import PreviousStays from './components/PreviousStays'
import Reports from './components/Reports'
import Logout from './components/SideNav/Logout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<CurrentRequests/>} />
      <Route path='/ongoing-stays' element={<OngoingStays/>} />
      <Route path='/previous-stays' element={<PreviousStays/>} />
      <Route path='/reports' element={<Reports/>} />
      <Route path='/logout' element={<Logout/>} />
    </Routes>
  )
}

export default App