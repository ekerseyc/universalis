const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/api/categories', (req, res) => {
  const categoryData = await Category.findAll({});
  res.json(categoryData);
});

router.get('/api/categories/:id', (req, res) => {
  const categoryData = await Category.findByPk(
    req.params.id, {
    include: [{ model: Product }]
  }
  );
  res.json(categoryData);
});

router.post('/api/categories', (req, res) => {
  const categoryData = await Category.create(req.body);
  res.json(categoryData);
});

router.put('/api/categories/:id', (req, res) => {
  const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(categoryData);
});

router.delete('/api/categories/:id', (req, res) => {
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(categoryData);
});

module.exports = router;
