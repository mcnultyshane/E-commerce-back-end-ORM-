// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
 
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tags_for_products'
})
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