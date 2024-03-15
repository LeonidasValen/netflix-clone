import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'

import { Navbar } from '../../components/navbar/navbar.jsx'
import { Features } from '../../components/features/features'
import { List } from '../../components/list/list'
import { Modal } from '../../components/modalMovie/modal.jsx'
import { Footer } from '../../components/footer/footer.jsx'

import { ModalProvider } from '../../context/modalContext.jsx'

import './home.css'

export function Home() {
    return (
        <Router>
            <ModalProvider>
                <div className="home">
                    <Navbar/>
                    <Routes>
                        <Route path='/netflix-clone' element={<Features type="movie"/>}></Route>
                    </Routes>
                    <section className='movies'>
                        <List title='Agregados recientemente'/>
                        <List title='Tendencias'/>
                        <List title='Populares'/>
                        <Modal/>
                    </section>
                    <Footer/>
                </div>
            </ModalProvider>
        </Router>
    )
}
