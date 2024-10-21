document.addEventListener('DOMContentLoaded', function() { // This is a built-in event that triggers when the page has loaded
  // The code inside this function will run when the page has loaded
    const postsContainer = document.getElementById('posts'); // This is the container where the blog posts will be displayed
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || []; // Retrieve the blog posts from local storage
  
    blogPosts.forEach(post => { // Loop through each blog post
      const postElement = document.createElement('div');// Create a new div element for the post
      postElement.classList.add('post'); // Add the 'post' class to the div element
      postElement.innerHTML = ` 
        <h2>${post.title}</h2> 
        <p>${post.content}</p> 
        <p><strong>Author:</strong> ${post.username}</p> 
      `;
      postsContainer.appendChild(postElement); 
    });
  
    document.getElementById('toggle-mode').addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  
    document.getElementById('back-button').addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
