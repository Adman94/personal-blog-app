const PATH = "./data.json"
const fs = require('fs');
class Post {
  get() {
    // Get Posts
    return this.readData();
  }

  getIndividualBlog(postId) {
    // Get One Blog Post
    const posts = this.readData();
    const foundPost = posts.find((post) => post.id == postId);
    // console.log(foundPost);
    return foundPost;
  }

  add(newPost) {
    // Add new post
    const currentPosts = this.readData();
    currentPosts.unshift(newPost)
    this.storeData(currentPosts);
  }

  readData() {
    let rawdata = fs.readFileSync(PATH);
    let posts = JSON.parse(rawdata);
    return posts;
  }

  storeData(rawData) {
    let data = JSON.stringify(rawData);
    fs.writeFileSync(PATH, data);
  }
}

module.exports = Post