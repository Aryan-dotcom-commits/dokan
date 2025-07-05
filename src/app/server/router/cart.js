const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
    res.send(`Get cart for user ${req.params.userId}`);
});

router.post('/:userId', (req, res) => {
    res.send(`Add product to user ${req.params.userId}'s cart`);
});

router.put('/:userId/:productId', (req, res) => {
    res.send(`Update quantity for product ${req.params.productId} in user ${req.params.userId}'s cart`);
});

router.delete('/:userId/:productId', (req, res) => {
    res.send(`Remove product ${req.params.productId} from user ${req.params.userId}'s cart`);
});

module.exports = router;
