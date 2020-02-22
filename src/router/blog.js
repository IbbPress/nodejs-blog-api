const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method

  // 获取博客列表
  if(method === 'GET' && res.path === '/api/blog/list') {
    const { author, keywords } = req.query
    const result = getList(author, keywords);
    // 返回值是 promise
    return result.then(data => {
      return new SuccessModel(data)
    })
    .catch(err => {
    })
  }
  // 获取博客详情
  if(method === 'GET' && res.path === '/api/blog/detail') {
    const { id } = req.query
    const result = getDetail(id);
    // 返回值是 promise
    return result.then(data => {
      return new SuccessModel(data)
    })
    .catch(err => {
    })
  }
  // 新建博客
  if(method === 'POST' && res.path === '/api/blog/new') {
    req.body.author = 'zhangsan'
    const result = newBlog(req.body)
    // 返回值是 promise
    return result.then(data => {
      return new SuccessModel(data)
    })
    .catch(err => {
    })
  }
  // 更新博客
  if(method === 'POST' && res.path === '/api/blog/update') {
    const { id } = req.query
    const result = updateBlog(id, req.body)
    // 返回值是 promise
    return result.then(data => {
      return new SuccessModel(data)
    })
    .catch(err => {
    })
  }
  // 删除博客
  if(method === 'POST' && res.path === '/api/blog/del') {
    const { id } = req.query
    const author = 'zhangsan'
    const result = delBlog(id, author)
    // 返回值是 promise
    return result.then(data => {
      return new SuccessModel(data)
    })
    .catch(err => {
    })
  }
}

module.exports = handleBlogRouter