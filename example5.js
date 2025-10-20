async function calculateAndFetch() {
  const number = 42;
  console.log("Calculating...");

  const square = number * number;
  console.log("Square:", square);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await response.json();

  console.log("Fetched Title:", data.title);
}

calculateAndFetch();
