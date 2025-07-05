const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all reviews');
});

router.get('/product/:productId', (req, res) => {
    res.send(`Get reviews for product ${req.params.productId}`);
});

router.get('/user/:userId', (req, res) => {
    res.send(`Get reviews by user ${req.params.userId}`);
});

router.post('/:productId', (req, res) => {
    res.send(`Post review for product ${req.params.productId}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete review ${req.params.id}`);
});

module.exports = router;
