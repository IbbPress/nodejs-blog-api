const getList = (author, keywords) => {
  return [
    {
      id: 1,
      author: 'zwc',
      title:  'title1',
      content: 'neirong',
      createTime: 1581994675635
    },
    {
      id: 2,
      author: 'zwc',
      title:  'title2',
      content: 'content2',
      createTime: 1581994707451
    },
    {
      id: 3,
      author: 'zwc',
      title:  'title3',
      content: 'content3',
      createTime: 1581994701544
    },
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
    author: 'zwc',
    title:  'title1',
    content: 'neirong',
    createTime: 1581994675635
  }
}

const newBlog = (blogData = {}) => {
  return {
    id: 3,
    title: 'new blog title',
    content: 'new blog content'
  }
}

const updateBlog = (id, blogData = {}) => {
  return {
    id: 3,
    title: 'new blog title',
    content: 'new blog content'
  }
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
}