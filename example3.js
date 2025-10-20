async function fetchUserAndPosts() {
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await postsResponse.json();

    console.log("User:", user.name);
    console.log("Number of Posts:", posts.length);
  } catch (error) {
    console.error("Error fetching user or posts:", error);
  }
}

fetchUserAndPosts();
