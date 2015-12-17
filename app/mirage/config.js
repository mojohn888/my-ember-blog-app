export default function() {


      this.get('/posts');
      this.get('/posts/:id', ['post', 'authors']);
      this.get('/authors');
      this.get('/authors/:id', ['author', 'posts']);

}
