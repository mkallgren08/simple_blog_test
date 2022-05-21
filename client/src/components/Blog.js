import React from 'react';
import {Container} from "react-bootstrap";

export const Blog = (props) => {
  console.log(props)
  return (
    <Container data-blogid={props.data.id} className="blog-wrapper">
      <h2>{props.data.title}</h2>
      <div dangerouslySetInnerHTML={{__html:props.data.text}}/>
      {props.data.timestamp}
      <button data-blogid={props.data.id} onClick={()=>props.deleteBlog(props.data.id)}>Delete Blog</button>
    </Container>
  )
}