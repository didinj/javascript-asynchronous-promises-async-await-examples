async function fetchParallelData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(res =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then(res =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/comments").then(res =>
        res.json()
      )
    ]);

    console.log(
      `Users: ${users.length}, Posts: ${posts.length}, Comments: ${comments.length}`
    );
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

fetchParallelData();
