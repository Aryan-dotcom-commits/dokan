const express = require('express');
const router = express.Router();

router.get('/stats', (req, res) => {
    res.send('Get admin dashboard stats');
});

router.get('/vendors', (req, res) => {
    res.send('Get list of all vendors');
});

router.get('/orders', (req, res) => {
    res.send('Get all orders (admin)');
});

router.delete('/users/:id', (req, res) => {
    res.send(`Force delete user ${req.params.id}`);
});

router.delete('/products/:id', (req, res) => {
    res.send(`Force delete product ${req.params.id}`);
});

module.exports = router;
