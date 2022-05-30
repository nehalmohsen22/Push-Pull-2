import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../../api/posts";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts()
      .then(({ data }) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        setPosts([]);
      });
  }, [setPosts]);
  return (
    <div className="col-10 text-center mx-auto">
      <Table responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <>
                <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>
                    <div>
                      <button
                        style={{
                          margin: "10px",
                          boxSizing: "content-box",
                          width: "50px",
                          borderRadius: "30px",
                          backgroundColor: "#8D8DAA",
                          borderColor: "#8D8DAA",
                        }}
                      >
                        {" "}
                        <Link
                          style={{ color: "#F7F5F2", textDecoration: "none" }}
                          to={`/post/${post.id}`}
                        >
                          View
                        </Link>
                      </button>
                      <button
                        style={{
                          margin: "10px",
                          boxSizing: "content-box",
                          width: "50px",
                          borderRadius: "30px",
                          color: "#8D8DAA",
                          backgroundColor: "#F7F5F2",
                          borderColor: "#8D8DAA",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          margin: "10px",
                          boxSizing: "content-box",
                          width: "50px",
                          borderRadius: "30px",
                          color: "#F7F5F2",
                          backgroundColor: "#8D8DAA",
                          borderColor: "#8D8DAA",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
