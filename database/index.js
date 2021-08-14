const mongo = require('mongoose');

mongo.Promise = global.Promise

mongo.connect("mongodb://localhost:27017/myBank", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = mongo;