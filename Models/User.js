// const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
// const { dbQuery } = require('../database');
// const BlogType = require('./Blog');

// console.log(BlogType,"^^^^^^^^^^^^^^^");
// let array=[];
// const UserType = new GraphQLObjectType({
//   name: 'User',
//   fields:()=>(
//     {
//       id: { type: GraphQLInt },
//       email: { type: GraphQLString },
//       name: { type: GraphQLString },
//       blogs: { 
//         type: new GraphQLList(BlogType),
//         resolve: async (user) => {
//           let res = await dbQuery(`SELECT * FROM Blog WHERE userId = ${parseInt(user.id)}`);
//           // let res = await dbQuery('select * from Blog where userId = ?', user.id);
//           return res;
//         }
//       }
//     }
//   )
// });

// module.exports = UserType;



















const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const { dbQuery } = require('../database');
const BlogType = require('./Blog');
const CategoryTagType = require('./CategoryTag');

let Sequelize = require("sequelize");


console.log(BlogType,"^^^^^^^^^^^^^^^");
let array=[];
const UserType = new GraphQLObjectType({
  name: 'User',
  fields:()=>(
    {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
      blogs: { 
        type: new GraphQLList(BlogType),
        // resolve(parent, args) {
        //   return BlogType.find({ });
        // },
        resolve: async (user) => {
          let res = await dbQuery(`SELECT * FROM Blog WHERE userId = ${parseInt(user.id)}`);
          // let res = await dbQuery('select * from Blog where userId = ?', user.id);
          return res;
        }
      },
      tags:{
        type:new GraphQLList(CategoryTagType),
        resolve: async (user) => {
          let res = await dbQuery(`SELECT * FROM CategoryTag WHERE tag_id = ${parseInt(user.id)}`);
          // let res = await dbQuery('select * from Blog where userId = ?', user.id);
          return res;
        }
      }
    }
  )
});

module.exports = UserType;