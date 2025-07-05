const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all the users');
});

router.get('/:id', (req, res) => {
    res.send('Get User by ID');
});

router.put('/:id', (req, res) => {
    res.send('Update user by id');
});

router.delete('/:id', (req, res) => {
    res.send('Delete user by id');
});

router.get('/:id/orders', (req, res) => {
    res.send('GET orders by userID');
});

router.get('/:id/cart', (req, res) => {
    res.send('Get Cart by userID');
});

router.get('/:id/wishlist', (req, res) => {
    res.send('Get Wishlist by user ID')
});

module.exports = router;