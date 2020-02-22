const { exec } = require('../db/mysql')

const getList = (author, keywords) => {
  let sql = `select * from article where 1=1 `
  
  if (author) {
    sql += `and author='${author} `
  }
  
  if (keywords) {
    sql += `and title like '%${keywords}%' `
  }

  sql += `order by create_time desc;`

  // 返回 promise
  return exec(sql)
}

const getDetail = (id) => {
  let sql = `select * from article where id='${id}';`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  const { title, content, author } = blogData
  // Date.now 精确到毫秒，目前数据库精确到秒
  const create_time = Math.ceil(Date.now() / 1000)
  let sql = `
    insert into article (title, content, create_time)
    values ('${title}', '${content}', ${create_time});
  `
  
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, blogData = {}) => {
  const { title, content } = blogData
  let sql = `
    update article set title='${title}', content='${content}' where id='${id}';
  `
  
  return exec(sql).then(data => data.affectedRows > 0)
}

const delBlog = (id, author) => {
  const sql = `delete from article where id='${id}';`
  return exec(sql).then(data => data.affectedRows > 0)
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
}