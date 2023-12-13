import Content from "../components/content"
import { useEffect, useState } from 'react'

const IndexPage = () => {
    const [contents, setContents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/post').then(response => {
            response.json().then(contents => {
                setContents(contents)
            })
        })
    }, [])
    return (
        <div className="content">
            <h2 className="content-head">Latest News</h2>
            <main className='main'>
                {contents.length > 0 && contents.map(content => (
                    <Content {...content} />
                ))}
            </main>
        </div>
    )
}

export default IndexPage