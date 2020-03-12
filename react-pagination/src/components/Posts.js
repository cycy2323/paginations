import React from 'react'
import './Posts.css'

const Posts = ({ data, loading }) => {
    if (loading) {
        return <h3>loading....</h3>
    }
    return (
        <ul className="list-post">
            {
                data.map(v => (
                    <li key={v.id} className="list-post-item">
                        <h3>{v.title}</h3>
                        <p>{v.content}</p>
                        <section className="post-panenl">
                            <span className="post-item">发表时间： {v.time}</span>
                            <span className="post-author">作者： {v.author}</span>
                            <span className="post-like">喜欢： {v.like}</span>
                        </section>
                    </li>
                ))
            }
        </ul>
    )
}
export default Posts