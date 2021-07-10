const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryData = Category.findAll().catch(
    (err) => {
      res.json(err);
    });
  res.json(categoryData)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id);
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

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

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