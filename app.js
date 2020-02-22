const querystring = require('querystring')
const handleUserRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')
// 用于解析 postData
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    
    let postData = ''
    req.on('data',  chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
  return promise
}
const serverHandle = (req, res) => {
  // 设置数据返回格式 JSON
  res.setHeader('Content-type', 'application/json')

  // 解析 path
  const url = req.url
  res.path = url.split('?')[0]

  // 解析 query
  req.query = querystring.parse(url.split('?')[1])

  // 解析 postData
  getPostData(req).then(postData => {
    req.body = postData

    // 处理 blog 路由
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
      res.end(JSON.stringify(blogData))
      return
    }

    // 处理 user 路由
    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end(JSON.stringify(userData))
      return
    }

    // 处理 404
    res.end(JSON.stringify({
      msg: '404 not found',
      errno: -1,
    }))
  })
}

module.exports = serverHandle