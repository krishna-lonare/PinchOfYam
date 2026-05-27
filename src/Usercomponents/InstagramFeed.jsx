import React, { useEffect, useState } from "react";

function InstagramFeed() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace this with your real Instagram access token
  const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

  useEffect(() => {

    async function fetchInstagramData() {

      try {

        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`
        );

        const data = await response.json();

        console.log("Instagram API Response:", data);

        setPosts(data.data);

      } catch (error) {

        console.log("Error fetching Instagram data:", error);

      } finally {

        setLoading(false);

      }
    }

    fetchInstagramData();

  }, []);

  if (loading) {
    return <h2>Loading Instagram Reels...</h2>;
  }

  return (

    <div
      style={{
        padding: "20px",
        fontFamily: "Arial"
      }}
    >

      <h1>Instagram Reels Feed</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >

        {posts?.map((post) => (

          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
          >

            <img
              src={post.thumbnail_url || post.media_url}
              alt="instagram reel"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h3 style={{ marginTop: "10px" }}>
              {post.caption
                ? post.caption.substring(0, 50)
                : "Instagram Reel"}
            </h3>

            <p>
              <strong>Type:</strong> {post.media_type}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(post.timestamp).toLocaleDateString()}
            </p>

            <a
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "blue",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              View On Instagram
            </a>

          </div>

        ))}

      </div>

    </div>
  );
}

export default InstagramFeed;