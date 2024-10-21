document.getElementById('blog-form').addEventListener('submit', function(event) { // This is an event listener that triggers when the form is submitted
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim(); // Retrieve the username from the input field
    const title = document.getElementById('title').value.trim(); // Retrieve the title from the input field
    const content = document.getElementById('content').value.trim(); // Retrieve the content from the input field
    const message = document.getElementById('message'); // This is the element where we will display a message to the user
  
    if (!username || !title || !content) { // Check if any of the fields are empty
      message.textContent = 'Please complete all fields.'; // Display an error message to the user
      return; // Stop the function from running
    }
  
    const blogPost = { // Create an object representing the new blog post
      username,
      title, //
      content
    };
  
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || []; // Retrieve the blog posts from local storage
    blogPosts.push(blogPost); // Add the new blog post to the array of blog posts
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts)); // Save the updated blog posts back to local storage
  
    window.location.href = 'blog.html'; // Redirect to the blog page
  });
