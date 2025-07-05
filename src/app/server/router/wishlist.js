const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
    res.send(`Get wishlist for user ${req.params.userId}`);
});

router.post('/:userId', (req, res) => {
    res.send(`Add product to wishlist for user ${req.params.userId}`);
});

router.delete('/:userId/:productId', (req, res) => {
    res.send(`Remove product ${req.params.productId} from wishlist for user ${req.params.userId}`);
});

module.exports = router;
