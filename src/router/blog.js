const { getList, getDetail, newBlog, updateBlog} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method

  // 获取博客列表
  if(method === 'GET' && res.path === '/api/blog/list') {
    const { author, keywords } = req.query
    const listData = getList(author, keywords);
    return new SuccessModel(listData)
  }
  // 获取博客详情
  if(method === 'GET' && res.path === '/api/blog/detail') {
    const { id } = req.query
    const data = getDetail(id);
    return new SuccessModel(data)
  }
  // 新建博客
  if(method === 'POST' && res.path === '/api/blog/new') {
    const data = newBlog(req.body)
    return new SuccessModel(data)
  }
  // 更新博客
  if(method === 'POST' && res.path === '/api/blog/update') {
    const { id } = req.query
    const data = updateBlog(id, req.body)
    return new SuccessModel(data)
  }
}

module.exports = handleBlogRouter