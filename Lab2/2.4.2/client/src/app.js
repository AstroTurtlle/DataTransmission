function run() {
  new Vue({
    el: '#app',
    data: {
      users: [],
      name: '',
      city: ''
    },
    created: function () {
      this.getUsers().then(response => (this.users = response.data));
    },
    methods: {
      getUsers: function() {
        console.log(axios.get('http://localhost:3000/users'));
          return axios.get('http://localhost:3000/users');
      },

      deleteUser: function(id) {
        axios.delete(`http://localhost:3000/users/${id}`)
          .then(() => this.getUsers().then(response => (this.users = response.data)));
      },

      addUser: function() {
        let user = { "name": this.name, "city": this.city };
        console.log(user);
        axios.post('http://localhost:3000/users', user)
          .then(() => this.getUsers().then(response => (this.users = response.data)));
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
