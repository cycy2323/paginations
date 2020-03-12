const express = require('express')
const Mock = require('mockjs')
const app = express()
const Random = Mock.Random

//设置跨域
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})


//获取文章列表
app.get('/posts', (req, res) => {
    let number = 100
    let data = []
    for (let i = 0; i < number; i++) {
        data.push(
            Mock.mock({
                id: i,
                title: Random.cparagraph(1),
                content: Random.cparagraph(2, 5),
                time: Random.datetime('yyyy-MM-dd hh:mm:ss'),
                author: Random.cname(),
                'url': '@url(http)',//随机url地址
                'img': '@image()',//随机图片
                'like|1-1000': 1
            })
        )
    }
    // 获取每页条数，当前页码，总页数
    let pageNo = Number(req.query.pageNo ? req.query.pageNo : 10)
    let currentPage = Number(req.query.currentPage ? req.query.currentPage : 1)
    let totalPage = Math.ceil(data.length / pageNo)

    //分页 limit
    let start = (currentPage - 1) * pageNo
    let end = currentPage * pageNo <= data.length ? currentPage * pageNo : data.length
    data = data.slice(start, end)

    res.json({
        content: data,
        currentPage,
        totalPage
    })
})


app.listen(3001, () => {
    console.log('3001');
    
})