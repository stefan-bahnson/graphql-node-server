const ObjectId = require('mongodb').ObjectID;

module.exports = {
  Query: {
    allUsers: async (root, data, { mongo: { Users }}) => await Users.find().toArray() ,
    user: async (_, args, { mongo: { Users }}) => {
      const user = await Users.findOne({ _id: ObjectId( args._id )})
      console.log(user);
      return user;
    }
  },
  Mutation: {
    createUser: async (_, args, { mongo: { Users }}) => {
      const newUser = await Users.insertOne( args )
      return newUser.ops[0];
    }
  },
};