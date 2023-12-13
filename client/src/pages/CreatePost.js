import { useState } from "react"
import Editor from '../Editor'
import { Navigate } from 'react-router-dom'


const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)
    
    const createNewPost = async (e) => {
        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])
        e.preventDefault()
        console.log(files)
        const response = await fetch('http://localhost:5000/post', {
            method: 'POST',
            body: data,
            credentials: 'include'
        })
        if (response.ok) {
            setRedirect(true)
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <form onSubmit={createNewPost}>
            <input type="title" 
                    placeholder={"Title"} 
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                    className="input" />
            <input type="summary" 
                    placeholder={"Summary"}
                    value={summary} 
                    onChange={e => setSummary(e.target.value)}
                    className="input" />
            <span className="upload">Upload an image</span>
            <input type="file"
                    onChange={(e) => setFiles(e.target.files)}
                    className="input" />
            <Editor value={content} onChange={setContent} />
            <button style={{marginTop:'5px'}}>Create post</button>
        </form>
    )
}

export default CreatePost