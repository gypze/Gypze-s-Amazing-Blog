const posts = [ // This is an array of objects representing blog posts
  { title: "Post 1", content: "This is the first post." }, // Each object has a title and content property
  { title: "Post 2", content: "This is the second post." }, // The title and content are strings
  { title: "Post 3", content: "This is the third post." } // The title and content can be anything you want
];

function displayPosts() { // This function displays the blog posts
  posts.forEach(post => { // Loop through each blog post
    console.log(`Title: ${post.title}`); // Log the title of the post to the console
    console.log(`Content: ${post.content}`); // Log the content of the post to the console
    
  });
}

displayPosts(); // Call the displayPosts function to display the blog posts
