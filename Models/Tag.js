const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');

const TagType = new GraphQLObjectType({
  name: 'Tag',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  }
});

module.exports = TagType;