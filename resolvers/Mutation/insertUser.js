const { GraphQLString,GraphQLInt,parseString } = require('graphql');
const { dbQuery } = require('../../database');
const { UserType } = require('../../Models');

const insertUser = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    name: { type: GraphQLString }
  },
  async resolve(_, { email, name }){
    let res = await dbQuery(`insert into User (email, name) values ('${email}', '${name}')`);
    return { id: res.insertId, email, name }
  }
};


const removeUser = {
  type:UserType,
  args:{
    id: { type: GraphQLInt },

  },
  async resolve(_, { id}){
    let res = await dbQuery(`delete FROM User WHERE id = ${parseInt(id)}`);
    return res[0]
  }
};

const updateUser = {
  type:UserType,
  args:{
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },

  },
  async resolve(_, { id,name,email}){
    let res = await dbQuery(`UPDATE User SET name = "${name}",email="${email}" WHERE id = ${parseInt(id)}`)
    console.log(res)
    return res;
  }
}


module.exports = {insertUser,removeUser,updateUser};
