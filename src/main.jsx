import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Patients from './Components/Patients/Patients.jsx'
import Stories from './Components/Success Stories/Stories.jsx'
import Layout from './Layout.jsx'
import NewPatients from './Components/Patients/NewPatients.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Dashboard />} />
      <Route path='Patients' element={<Patients />} />
      <Route path='Stories' element={<Stories />} />
      <Route path='NewPatients' element={<NewPatients/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)