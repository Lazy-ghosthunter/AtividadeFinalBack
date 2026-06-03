const express = require('express');
const router = express.Router();
const Livro = require('../models/Livro');

router.get('/', async (req, res) => {
  const lista = await Livro.findAll({ order: [['id_livro', 'DESC']] });
  res.status(200).json(lista);
});

router.post('/', async (req, res) => {
  const { nome, preco, categoria_id } = req.body;
  await Livro.create({ nome, preco, categoria_id });
  res.status(200).json({ message: 'Cadastrado com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { nome, preco, categoria_id } = req.body;
  await Livro.update(
    { nome, preco, categoria_id },
    { where: { id_livro: req.params.id } }
  );
  res.status(200).json({ message: 'Atualizado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  await Livro.destroy({
    where: { id_livro: req.params.id }
  });
  res.status(200).json({ message: 'Excluído com sucesso' });
});

module.exports = router;