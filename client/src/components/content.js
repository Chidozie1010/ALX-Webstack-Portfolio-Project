import {format} from 'date-fns'
import {Link} from 'react-router-dom'

const Content = ({_id,title,summary,content,cover,createdAt, author}) => {
    return (
            <div  className="post">
                <div className="post__img-box">
                    <Link to={`/post/${_id}`}>
                        <img src={'http://localhost:5000/'+cover}
                         alt="img" className="post__img" />
                    </Link>
                </div>
                <div className="post__texts">
                    <Link to={`/post/${_id}`}>
                        <h2 className="post__head">{title}</h2>
                    </Link>
                    <p className="post__info">
                        <a href="##" className="post__author">@{author.username}</a>
                        <time>{format(new Date(createdAt), 'MMM d, yyyy, HH:mm')}</time>
                    </p>
                    <p className="post__body">{summary}</p>
                    <Link to={`/post/${_id}`} className="post__read">Read more {'>>>>'} </Link>
                </div>
            </div>
    )
}

export default Content