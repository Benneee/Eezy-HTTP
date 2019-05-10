const http = new eezyHTTP();

// Make a GET Request
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// GET Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Make a POST Request:)

//Create data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create the post
// Notice the ID
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete a Post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
