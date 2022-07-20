const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&rating=pg-13`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log('Error GETting', error.message);
        res.sendStatus(500);
    });
});


module.exports = router;