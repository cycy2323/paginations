import React from 'react'
import './Paginations.css'
const Paginations = ({ totalPage, requestPosts, currentPage }) => {
    let liArr = []
    let allArr = []
    for (let i = 0; i < totalPage; i++) {
        allArr.push(i + 1)
    }
    //首先判断总页数，如果小于10
    if (allArr.length <= 10) {
        liArr = allArr
    } else {
        //如果总页数大于10 当前页小于5
        if (currentPage < 5) {
            liArr = [...allArr.slice(0, 5), '...', totalPage]
        } else {
            if (currentPage <= totalPage - 4) {
                liArr = [1, '...', ...allArr.slice(currentPage - 2, currentPage + 1), '...', totalPage]
            } else {
                liArr = [1, '...', ...allArr.slice(totalPage - 5, totalPage)]
            }
        }
    }

    return (
        <nav>
            <ul className="list-page">
                <li className="list-page-item" onClick={() => requestPosts(currentPage - 1)}>&lt;</li>
                {
                    liArr.map((v, i) => (
                        <li className={v == '...' ? '' :
                            (v == currentPage ? 'list-page-item list-page-item-active' : 'list-page-item')}
                            onClick={() => requestPosts(v)} key={i}>
                            {v}
                        </li>
                    ))
                }
                <li className="list-page-item" onClick={() => requestPosts(currentPage + 1)}>&gt;</li>
            </ul>
        </nav>
    )
}

export default Paginations
