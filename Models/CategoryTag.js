const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');

const CategoryTagType = new GraphQLObjectType({
  name: 'CategoryTag',
  fields: {
    id: { type: GraphQLInt },
    user_id: { type: GraphQLInt },
    category_id: { type: GraphQLInt },
    tag_id: { type: GraphQLInt },  }
});

module.exports = CategoryTagType;