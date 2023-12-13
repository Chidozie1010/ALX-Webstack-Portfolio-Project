import Header from '../components/header'
import Footer from '../components/footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
            
        </div>
    )
}

export default Layout