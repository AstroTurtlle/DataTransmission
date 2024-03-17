var api = require('./src/api.js').app;
var users = require('./src/users.json');

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/users', function (request, response) {
  response.json(users);
});

var fs = require('fs');
var path = require('path');
api.post('/users', function (request, response) {
  users.push(request.body);
  fs.writeFile(path.join(__dirname, 'src', 'users.json'),
  JSON.stringify(users, null, 2), function (err) {
    if (err) {
      response.status(500).json('Error saving the user');
    } else {
      response.json('Users was added succesfully');
    }
  });
});

api.delete('/users/:id', function (request, response) {
  var id = request.params.id;
  console.log(id);
  users.splice(id, 1);
  fs.writeFile(path.join(__dirname, 'src', 'users.json'),
  JSON.stringify(users, null, 2), function (err) {
    if (err) {
      response.status(500).json('Error saving the user');
    } else {
      response.json('User with index ' + request.params.index + ' was deleted');
    }
  });
});

api.put('/users', function (request, response) {
  users[users.request.params.index] = request.params.new_user;
  fs.writeFile(path.join(__dirname, 'src', 'users.json'),
  JSON.stringify(users, null, 2), function (err) {
    if (err) {
      response.status(500).json('Error saving the user');
    } else {
      response.json('Users was saved succesfully');
    }
  });
});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});
