const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')

const connectionString = ""

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client
  const app = require('./app')
  app.listen(3000)
})
