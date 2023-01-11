const { GraphQLObjectType } = require('graphql');

const fieldsUser = require('./user');
const fieldsUsers = require('./users');
const fieldsBlogs = require('./blogs');
const fieldsCategories = require('./categories');
const fieldsTags = require('./tags');
const fieldsSubCategories = require('./subcategories');
const fieldsCategoryTags = require('./categorytags');



const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // Query one user
    user: fieldsUser,
    // Query all users
    users: fieldsUsers,
    // Query all blogs
    blogs: fieldsBlogs,
    // Query all categories
    categories :fieldsCategories,
    // Query all tags
    tags :fieldsTags,
    // Query all subcategories
    subcategories :fieldsSubCategories,
    // Query all categoriestags
    categorytags :fieldsCategoryTags
  }
});

module.exports = Query;