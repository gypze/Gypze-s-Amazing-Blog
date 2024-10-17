document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const message = document.getElementById('message');
  
    if (!username || !title || !content) {
      message.textContent = 'Please complete all fields.';
      return;
    }
  
    const blogPost = {
      username,
      title,
      content
    };
  
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  
    window.location.href = 'blog.html';
  });
