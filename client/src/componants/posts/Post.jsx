import Card from "../card/Card";
import { Container } from "react-bootstrap";
import { fetchPostByID } from "../../api/posts";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchPostByID(id)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((err) => {
        setPost(null);
      });
  }, [id]);
  return (
    <Container className="emp-profile">
      {!post && <div>loading</div>}
      {post ? (
        <Card key={id} Title={post.title} Body={post.body} />
      ) : (
        <div>Not Fond</div>
      )}
    </Container>
  );
}
