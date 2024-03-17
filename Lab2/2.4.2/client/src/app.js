function run() {
  new Vue({
    el: '#app',
    data: {
      users: [],
      name: '',
      city: '',
      updateIndex: null,
      updateName: '',
      updateCity: ''
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
        let user = { "name": this.name, "city": this.city };
        axios.post('http://localhost:3000/users', user)
          .then(() => this.getUsers().then(response => (this.users = response.data)));
      },

      pre_update: function(id) {
        this.updateIndex = id;
        this.updateName = this.users[id].name;
        this.updateCity = this.users[id].city;
      },

      confirmUpdate: function(id) {
        let newUser = { "name": this.updateName, "city": this.updateCity };
        this.updateIndex = null;
        axios.put(`http://localhost:3000/users/${id}`, newUser)
          .then(() => this.getUsers().then(response => (this.users = response.data)));
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
