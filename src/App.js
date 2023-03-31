import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-white">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a href="/" className="logo">
              Logo
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Shop
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="card-container">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} imageUrl="https://via.placeholder.com/300" />
        ))}
      </div>

      <button className="button-blue">View More</button>
    </div>
  );
};

export default App;
