const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all orders (admin)');
});

router.get('/:orderId', (req, res) => {
    res.send(`Get order details for order ${req.params.orderId}`);
});

router.get('/user/:userId', (req, res) => {
    res.send(`Get all orders for user ${req.params.userId}`);
});

router.post('/', (req, res) => {
    res.send('Create a new order');
});

router.put('/:orderId/status', (req, res) => {
    res.send(`Update order status for order ${req.params.orderId}`);
});

router.delete('/:orderId', (req, res) => {
    res.send(`Delete order ${req.params.orderId}`);
});

module.exports = router;
