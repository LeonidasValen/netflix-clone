import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'

import { Navbar } from '../components/navbar/navbar'
import { Features } from '../components/features/features'
import { List } from '../components/list/list'

import './home.css'

export function Home() {
  return (
    <Router>
      <div className="home">
          <Navbar/>
          <Routes>
            <Route path='/netflix' element={<Features type="movie"/>}></Route>
          </Routes>
          <section>
              <List />
              <List />
              <List />
            </section>
      </div>
    </Router>
  )
}
