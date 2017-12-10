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
    allUsers: function() {
      return Users
    },
  },
};