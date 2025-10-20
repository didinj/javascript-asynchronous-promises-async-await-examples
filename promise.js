const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data!");
    }
  }, 2000);
});

myPromise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });

function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
  });
}

function displayPosts(posts) {
  console.log("User posts:", posts);
}

fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => displayPosts(posts))
  .catch(err => console.error("Error:", err));

myPromise
  .then(msg => console.log(msg))
  .catch(err => console.error(err))
  .finally(() => console.log("Operation finished."));
