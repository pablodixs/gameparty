import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { App } from './App'
import { TheLastOfUs } from './pages/games/ThaLastOfUs'
import { Error404 } from './pages/Error404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='*' element={ <Error404 /> } />
        <Route path='/' element={ <App /> } />
        <Route path='/games'>
          <Route path='TheLastOfUs' element={ <TheLastOfUs /> } />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
