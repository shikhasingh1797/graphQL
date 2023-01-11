const { GraphQLList } = require('graphql');
const { dbQuery } = require('../../database');
const { BlogType } = require('../../Models');

const fieldsBlogs = {
  type: new GraphQLList(BlogType),
  async resolve(_, {}){
    let res = await dbQuery(`SELECT * FROM Blog`);
    return res;
  }
};

module.exports = fieldsBlogs;
