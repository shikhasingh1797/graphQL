const { GraphQLList } = require('graphql');
const { dbQuery } = require('../../database');
const { SubCategoryType } = require('../../Models');

const fieldsSubCategories = {
  type: new GraphQLList(SubCategoryType),
  async resolve(_, {}){
    let res = await dbQuery(`SELECT * FROM SubCategory`);
    return res;
  }
};

module.exports = fieldsSubCategories;
