const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method

  if (method === 'POST' && res.path === '/api/user/login') {
    const { username, password } = req.body
    const result = loginCheck(username, password)
    
    return result.then(data => {
      if (data.userName) {
        return new SuccessModel(data)
      }
      return new ErrorModel(data)
    })
  }
}

module.exports = handleUserRouter