const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const { dbQuery } = require('../database');
// const UserType = require('./User');


// console.log(UserType,"User^^^^^^^^^^^^^^^");
const BlogType = new GraphQLObjectType({
  name: 'Blog',
  fields:() => (
    {
      id: { type: GraphQLInt },
      title: { type: GraphQLString },
      createdAt: { type: GraphQLString },
      updatedAt: { type: GraphQLString },
      // user: { 
      //   type: UserType,
      //   resolve: async (blog) => {
      //     let res = await dbQuery(`SELECT * FROM User WHERE id = ${parseInt(blog.userId)}`);
      //     return res[0];
      //   }
      // }
    }
  ) 
});

module.exports = BlogType;