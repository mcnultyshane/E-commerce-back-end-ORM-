const router = require('express').Router();
const {
  Category,
  Product,
  // eslint-disable-next-line no-unused-vars
  ProductTag
} = require('../../models');

// The `/api/categories` endpoint
// ***** WORKS *****
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      // working at 3pm on Sunday.
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  // be sure to include its associated Products
});
// SUnday 3pm getting the 500 error
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{ model: Product}]
      // , through: ProductTag, as: 'product_tags'
    });
    if (!categoryData) {
      res.status(404).json({
        message: 'No category with this id.'
      });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// **** .post works 3pm sunday*******
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// ***** .put works 3pm sunday ********
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCat = await Category.update(req.body, {
      where: {
        id: req.body.id,
      }
    });
    if (!updatedCat[0]) {
      res.status(404).json({
        message: 'No category with this id.'
      });
      return;
    }
    res.status(200).json(updatedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ***** .delete works 3pm sunday ********
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deletedCat = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(deletedCat);
});

module.exports = router;