import { useContext, useState } from "react"
import { Navigate} from 'react-router-dom'
import {UserContext} from "../userContext"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const {setUserInfo} = useContext(UserContext)

    const login = async (e) => {
        e.preventDefault()
        setUsername("")
        setPassword("")
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            })
        }
        else {
            alert('wrong credentials')
            return (
                <div>
                    nooooooooooooooo
                </div>
            )
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
   
    return (
    <form action="" className="form" onSubmit={login}>
        <h2>Login</h2>
        <div className='form-group'>
            <input 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                name='name' 
                className="form-control" 
                id="name" 
                placeholder="Username"
             />
        </div>
        <div className='form-group'>
            <input 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} 
                name='password' 
                className="form-control" 
                id="password"
                placeholder="password" 
            />
        </div>
        <button>Login</button>
    </form>
    )
}

export default Login