const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tags', (req, res) => {
  const tagData = await Tag.findAll({});
  res.json(tagData);
});

router.get('/api/tags/:id', (req, res) => {
  const tagData = await Tag.findByPk(
    req.params.id, {
    include: [{ model: Product }]
  }
  );
  res.json(tagData);
});

router.post('/api/tags', (req, res) => {
  const tagData = await Tag.create(req.body);
  res.json(tagData);
});

router.put('/api/tags/:id', (req, res) => {
  const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(tagData);
});

router.delete('/api/tags/:id', (req, res) => {
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(tagData);
});

module.exports = router;
