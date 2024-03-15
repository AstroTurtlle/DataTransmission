function run() {
  new Vue({
    el: '#app',
    data: {
      users: []
    },
    created: function () {
      this.getUsers().then(response => (this.users = response.data));
    },
    methods: {
      getUsers: function() {
          return axios.get('http://localhost:3000/users');
      },

      deleteUser: function(id) {
        axios.delete(`http://localhost:3000/users/${id}`)
          .then(() => this.getUsers().then(response => (this.users = response.data)));
      },

      addUser: function() {
        axios.put('http://localhost:3000/users', {
          name: this.name,
          age: this.age
        }).then(() => this.getUsers().then(response => (this.users = response.data)));
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
