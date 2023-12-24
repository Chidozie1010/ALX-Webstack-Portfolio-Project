import img from '../img/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="left">&copy; Breeltech. All rights reserved.</p>
            <div>
                <img src={img} alt="" className='footer__logo' />
            </div>
            <p className="right">Authored by <span>Jubreel, Oluwaseun & Chidozie</span></p>
        </footer>
    )
}

export default Footer