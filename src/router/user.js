const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 获取 cookie 的过期时间
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString()
}

const handleUserRouter = (req, res) => {
  const method = req.method

  if (method === 'POST' && res.path === '/api/user/login') {
    const { username, password } = req.body
    const result = login(username, password)
    
    return result.then(data => {
      if (data.userName) {
        // 设置 session
        req.session.username = data.userName

        return new SuccessModel(data)
      }
      return new ErrorModel(data)
    })
  }
}

module.exports = handleUserRouter