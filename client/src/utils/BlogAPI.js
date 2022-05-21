import axios from "axios";
let Blog_API=`https://us-central1-mbtcandidate.cloudfunctions.net/posts/mkallgren`

export default {
  // Gets all blogs
  getBlogs: function () {
    return axios.get(Blog_API);
  },
  // Gets the blog with the given id
  getBlog: function (id) {
    return axios.get(`${Blog_API}/${id}`);
  },
  // Deletes ALL blogs with the given id
  deleteBlogs: function () {
    return axios.delete(Blog_API);
  },
  // Deletes the blog with the given id
  deleteBlog: function (id) {
    return axios.delete(`${Blog_API}/${id}`);
  },
  // Saves a blog to the database
  saveBlog: function (blogData) {
    return axios.post(Blog_API, blogData);
  },
  generateBlogs: function() {
    return axios.get(`${Blog_API}/generateSampleData`);
  }
};
