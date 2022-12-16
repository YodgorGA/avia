import React from 'react'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Avia from './pages/Avia';
import AviaInfo from './pages/AviaInfo';
import './scss/index.scss';


export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={'/avia'}>
            <Route path={''} element={<Avia/>}/>
            <Route path={'info'} element={<AviaInfo/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;