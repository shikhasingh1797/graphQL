const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();
var PORT =  3000;

app.use('/', graphqlHTTP({
  graphiql: true,
  schema: schema
}));

// app.listen(3000);
app.listen(PORT,()=>{
  console.log(`App is listing on port: ${PORT}`)
})