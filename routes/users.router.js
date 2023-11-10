const express = require('express');

const router = express.Router();

// http://localhost:3000/users?limit=100&offset=20
router.get('/', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        })
    } else {
        res.send('No hay query parametros')
    }
})

module.exports = router;