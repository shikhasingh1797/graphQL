const { GraphQLObjectType } = require('graphql');
const {insertUser,removeUser,updateUser} = require('./insertUser');

const Mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    // Insert a new user record
    insertUser: insertUser,
    removeUser: removeUser,
    updateUser:updateUser
  }
});

module.exports = Mutation;
