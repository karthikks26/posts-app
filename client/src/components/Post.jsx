import axios from "axios";
import { useEffect, useState } from "react";
import "./Post.css"; // Import CSS file for styling

const Post = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/posts");
        console.log(response.data.allPosts);
        setImages(response.data.allPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="post-container">
      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        images.map((post, index) => (
          <div key={index} className="post-item">
            <img src={post.url} alt={`Image ${index}`} />
            {console.log(post.url)}
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
