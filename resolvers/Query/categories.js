const { GraphQLList } = require('graphql');
const { dbQuery } = require('../../database');
const { CategoryType } = require('../../Models');

const fieldsCategories = {
  type: new GraphQLList(CategoryType),
  async resolve(_, {}){
    let res = await dbQuery(`SELECT * FROM Category`);
    return res;
  }
};

module.exports = fieldsCategories;
