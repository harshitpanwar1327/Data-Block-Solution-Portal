import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/authentication/Login.jsx'
import ForgotPassword from './pages/authentication/ForgotPassword.jsx'
import ActivityLogs from './pages/main/ActivityLogs.jsx'
import HealthMonitoring from './pages/main/HealthMonitoring.jsx'
import LicenseManagement from './pages/main/LicenseManagement.jsx'
import PrivacyManagement from './pages/main/PrivacyManagement.jsx'
import ReportIssues from './pages/main/ReportIssues.jsx'
import SystemOverview from './pages/main/SystemOverview.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/activity-logs' element={<ActivityLogs/>}/>
        <Route path='/health-monitoring' element={<HealthMonitoring/>}/>
        <Route path='/license-management' element={<LicenseManagement/>}/>
        <Route path='/privacy-management' element={<PrivacyManagement/>}/>
        <Route path='/report-issues' element={<ReportIssues/>}/>
        <Route path='/system-overview' element={<SystemOverview/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
