const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')

const connectionString = "mongodb+srv://Admin:&Au$8JbmHJsP@-^z@baruha.cxqwd.mongodb.net/Test?retryWrites=true&w=majority"

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client
  const app = require('./app')
  app.listen(3000)
})