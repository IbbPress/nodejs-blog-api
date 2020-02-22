const handleUserRouter = (req, res) => {
  const method = req.method

  if (method === 'POST' && res.path === '/api/user/login') {
    return {
      msg: '登录接口'
    }
  }
}

module.exports = handleUserRouter