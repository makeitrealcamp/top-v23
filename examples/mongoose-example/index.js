const connectDb = require('./config/database')

const Post = require('./models/blog')

connectDb()
  .then(async () => {
    // const postCreated = await Post.create({
    //   title: 'My first post',
    //   description: 'This is my first post',
    //   url: 'https://www.google.com'
    // })

    const posts = await Post.find(
      { title: 'MY first post' }, // FILTER
      { title: 1, url: 1 }, // PROJECT
    )
    console.log("🚀 ~ file: index.js ~ line 47 ~ .then ~ postCreated", posts)
  })


