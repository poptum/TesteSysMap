const api = {
  getPosts: function() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
      response.json()
    );
  },
  getComments: function(id) {
    let url = "https://jsonplaceholder.typicode.com/comments";
    if (id) url = url + "?postId=" + id;
    return fetch(url).then(response => response.json());
  }
};

export default api;
