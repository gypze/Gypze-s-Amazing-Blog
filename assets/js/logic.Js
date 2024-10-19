const posts = [
  { title: "Post 1", content: "This is the first post." },
  { title: "Post 2", content: "This is the second post." },
  { title: "Post 3", content: "This is the third post." }
];

function displayPosts() {
  posts.forEach(post => {
    console.log(`Title: ${post.title}`);
    console.log(`Content: ${post.content}`);
  });
}

displayPosts();