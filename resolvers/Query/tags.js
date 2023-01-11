const { GraphQLList } = require('graphql');
const { dbQuery } = require('../../database');
const { TagType } = require('../../Models');

const fieldsTags = {
  type: new GraphQLList(TagType),
  async resolve(_, {}){
    let res = await dbQuery(`SELECT * FROM Tag`);
    return res;
  }
};

module.exports = fieldsTags;
