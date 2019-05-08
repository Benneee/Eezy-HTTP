const http = new eezyHTTP();

// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  console.log(posts);
});
