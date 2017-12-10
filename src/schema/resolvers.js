const Users = [
  {
    _id: 1,
    firstName: 'Lena',
    lastName: 'Last'
  },
  {
    _id: 2,
    firstName: 'Stefan',
    lastName: 'Bahnson'
  },
];


module.exports = {
  Query: {
    allUsers: () => Users,
    user: (_, args) => 
    Users.find(user => user._id === args._id)
  },
  Mutation: {
    createUser: (_, args) => {
      const newUser = Object.assign({_id: Users.length + 1}, args)
      Users.push(newUser)
      return newUser
    }
  },
};