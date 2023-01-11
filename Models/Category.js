const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  }
});

module.exports = CategoryType;