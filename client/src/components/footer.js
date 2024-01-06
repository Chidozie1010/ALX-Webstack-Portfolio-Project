import img from '../img/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="left">&copy; Breeltech. All rights reserved.</p>
            <div className='footer__logo'>
                <img src={img} alt=""  />
            </div>
            <p className="right">Authored by <span>Jubreel, Oluwaseun & Chidozie</span></p>
        </footer>
    )
}

export default Footer