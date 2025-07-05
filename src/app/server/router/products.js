const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List all products');
});

router.get('/:id', (req, res) => {
    res.send('List products by ID')
});

router.post('/', (req, res) => {
    res.send('New Product added');
});

router.put('/:id', (req, res) => {
    res.send('Update product by ID')
});

router.delete('/:id', (req, res) => {
    res.send('Product deleted by ID');
});

router.get('/category/:category', (req, res) => {
    res.send('Get products by category')
});

router.get('/brand/:brand', (req, res) => {
    res.send('Get products by brand')
});

router.get('/search', (req, res) => {
    res.send('Get products by search')
});

router.get('/sales', (req, res) => {
    res.send('Get all products on sale')
})

router.get('/collection/:collection', (req, res) => {
    res.send('Get products by collection')
});
module.exports = router;