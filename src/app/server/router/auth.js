const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.send('Register hit');
});

router.post('/login', (req, res) => {
    res.send('Login hit');
});

router.post('/forgot-password', (req, res) => {
    res.send('Forgot Password hit');
});

router.get('/me', (req, res) => {
    res.send('User Profile with token here');
});

module.exports = router;