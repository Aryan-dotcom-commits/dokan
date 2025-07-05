const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
    res.send('Get all categories');
});

router.get('/brands', (req, res) => {
    res.send('Get all brands');
});

router.get('/collections', (req, res) => {
    res.send('Get all collections');
});

router.get('/layers', (req, res) => {
    res.send('Get all seasonal layers');
});

router.get('/sales', (req, res) => {
    res.send('Get all sales types');
});

router.get('/currencies', (req, res) => {
    res.send('Get all currencies');
});

router.get('/roles', (req, res) => {
    res.send('Get all role types');
});

module.exports = router;
