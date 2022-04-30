import React, { useEffect, useState } from "react";
import logo from "../../Asests/Img/Logo.svg";
import styles from "./Articles.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(data);
      } catch (error) {
        console.log("error");
      }
    };

    setLoading(false);
    fetchData();
  }, []);

  return (
    <div>
      <h1>Articles</h1>

      {loading && `{loader}`}

      <div className={styles.wrapper}>
        {posts.map((post) => (
          <div kay={post.id} className={styles.card}>
            <h4>{post.title}</h4>
            <img src={logo} alt="logo" height={35} />
            <p>{post.body}</p>
            <Link to="/more">show more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
