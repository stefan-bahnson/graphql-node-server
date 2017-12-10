const { MongoClient } = require('mongodb');
const MONGO_URL = 'mongodb://localhost:27017';

module.exports = async () => {
  const mongoConnection = await MongoClient.connect(MONGO_URL)
  const db = mongoConnection.db('stena')
  return {
    Users: db.collection('users')
  }
}