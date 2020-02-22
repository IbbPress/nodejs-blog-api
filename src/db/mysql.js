const mysql = require('mysql')
const { MYSQL_CONF }  = require('../conf/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 统一执行 sql 的函数
// 返回值是一个 promise
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}

/**
 * 注意：这里不能关闭 mysql 连接
 * con.end()
 */

module.exports = {
  exec
}