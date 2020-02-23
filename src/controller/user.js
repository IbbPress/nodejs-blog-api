const { exec } = require('../db/mysql')

const login = (username, password) => {
  const sql = `
    select userName from user where userName='${username}' and password='${password}';
  `
  
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}