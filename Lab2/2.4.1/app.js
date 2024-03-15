function run() {
  new Vue({
    el: '#app',
    data: {
      message: ''
    },
    methods: {
      doSomething: function () {
        if (this.message === "123") {
          this.message = "Mesajul este egal cu 123";
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
