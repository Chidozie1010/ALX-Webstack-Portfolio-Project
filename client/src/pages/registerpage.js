import {useState} from "react"

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const register = async(e) => {
        e.preventDefault()
        setUsername("")
        setPassword("")
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type': 'application/json'}
        })
        if (response.status !== 200) {
            alert('registration failed');
        }
        else {
        alert('registration successful')
        }
    }

    return (
        <div className="register">
            <form action="" className="form" onSubmit={register}>
                <h2>Register</h2>
                <div className='form-group'>
                    <input 
                        type="text" 
                        name='name'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="form-control" 
                        id="name" placeholder="Username" 
                    />
                </div>
                <div className='form-group'>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control" 
                        id="password" placeholder="password" />
                </div>
                <button>Register</button>
                <p>Be more than a reader!!!!!</p>
            </form>
        </div>
    )
}

export default Register