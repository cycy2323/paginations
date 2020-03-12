import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './components/Posts'
import Paginations from './common/Paginations'
import axios from 'axios'


const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageNo, setPageNo] = useState(3)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    const req = async () => {
      setLoading(true)
      const res = await axios.get('http://localhost:3001/posts',{params:{currentPage, pageNo}})
      console.log(res)
      setData(res.data.content)
      setTotalPage(res.data.totalPage)
      setLoading(false)
    }
    req()
  }, [currentPage])

  const requestPosts=(page)=>{
    if(page == '...') return
    if(page == 0 || page > totalPage) return
    setCurrentPage(page)
  }

  return (
    <div className="container">
      <h1 className="title">我的文章</h1>
      <Posts loading={loading} data={data}/>
      <Paginations totalPage={totalPage} requestPosts={requestPosts} currentPage={currentPage}/>
    </div>
  );
}

export default App;
