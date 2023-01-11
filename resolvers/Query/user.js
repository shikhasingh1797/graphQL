const { GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const { dbQuery } = require('../../database');
const { UserType } = require('../../Models');

const fieldsUser = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  async resolve(_, { id }){
    let res = await dbQuery(`SELECT * FROM User WHERE id = ${id}`);
    return res[0];
  }
};

module.exports = fieldsUser;
