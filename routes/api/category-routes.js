const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categoryData = await Category.findAll({});
  res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  const categoryData = await Category.findByPk(
    req.params.id, {
    include: [{ model: Product }]
  }
  );
  res.json(categoryData);
});

router.post('/', async (req, res) => {
  const categoryData = await Category.create(req.body);
  res.json(categoryData);
});

router.put('/:id', async (req, res) => {
  const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(categoryData);
});

module.exports = router;
