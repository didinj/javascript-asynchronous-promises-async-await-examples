fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log("Post Title:", data.title);
  })
  .catch(error => {
    console.error("Error fetching post:", error);
  });
