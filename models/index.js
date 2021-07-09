// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products
// (as a category can have multiple products but a produc can only belong to one category)

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

//=============================================================
// (Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.)
//=============================================================== 


// ===========================================================
// > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.
// ============================================================
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};