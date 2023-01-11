const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const { dbQuery } = require('../database');
const CategoryType = require('./Category');

const SubCategoryType = new GraphQLObjectType({
  name: 'SubCategory',
  fields: {
    id: { type: GraphQLInt },
    category_id : { type: GraphQLInt },
    name: { type: GraphQLString },
    category: { 
      type: CategoryType,
      resolve: async (subcategory) => {
        let res = await dbQuery(`SELECT * FROM Category WHERE id = ${parseInt(subcategory.category_id)}`);
        return res[0];
      }
    }
  }
});

module.exports = SubCategoryType;
