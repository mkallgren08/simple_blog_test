import React, { Component } from "react";
import {Footer,NavBar, PageWrapper} from "../../page_fragments";
import {Blog} from "../../components";
import API from "../../utils/BlogAPI";
import "./Main.css"

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state={
      blogs: ''
    }
  }
  // loads intital blog list
  componentDidMount(){
    this.getBlogs()
  }

  // gets all Blogs
  getBlogs=()=>{
    API.getBlogs().then(res=>{
      this.setState({
        blogs: res.data.response
      },()=>{console.log(this.state)})
    })
  }

  deleteBlog=(id)=>{
    console.log("delete heard")
    API.deleteBlog(id).then(
      this.getBlogs()
    )
  }

  generateData= () => {
    API.generateBlogs().then(
      this.getBlogs()
    )
  }

  render (){
    const blogs=this.state.blogs;
    console.log(blogs)
    return (
      <PageWrapper>
        <h1>Welcome to your blog</h1>
        <button onClick={this.generateData}>Generate sample data</button>
        <NavBar />
        <div>
          {blogs?(
            blogs.map((blog)=>{
            return <Blog data={blog} deleteBlog={this.deleteBlog}></Blog>
          })):null
        }
        </div>
      </PageWrapper>
    )
  }
}

export default MainPage
