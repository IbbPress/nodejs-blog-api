const env = process.env.NODE_ENV  // 环境参数

let MYSQL_CONF
if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'iforget',
    part: '3306',
    database: 'ibbpress'
  }
}
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'mysql_2020',
    part: '3306',
    database: 'myblog'
  }
}


module.exports = {
  MYSQL_CONF,
}