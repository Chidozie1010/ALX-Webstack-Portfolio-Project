import { useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../userContext'
import img from '../img/logo.png'

const Header = () => {
    const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:5000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, [setUserInfo])

    const logout = () => {
        fetch('http://localhost:5000/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null)
    }

    const username = userInfo?.username
    return (
        <div>
            <header className="header">
                <div>
                    <Link to='/'><img src={img} alt='logo' className='logo' /></Link>
                    <h1><Link to='/'>allRoundBlog</Link></h1>
                </div>
                <div>
                    {username && (
                        <>
                            <p className="loggedName">Hi {username}!!!</p>
                        </>
                    )}
                    <nav className="nav">
                        {username && (
                            <>
                                <Link to="create" className="nav__link1">Create new post</Link>
                                <Link to='/login' className="nav__link1" onClick={logout}>Logout</Link>
                            </>
                        )}
                        {!username && (
                            <>
                                <Link to="/login" className="nav__link">Login</Link>
                                <Link to="/register" className="nav__link">Register</Link>
                            </>
                        )}
                   </nav>
                </div>
            </header>
            <div className='header__text'>
                <h2 className="welcome-head">Welcome to allRound's Blog</h2>
                <p className="caption">News, Events, Entertainment, Lifestyle, Fashion, Beauty, Inspiration and yes...</p>
            </div>
        </div>
    )
}

export default Header