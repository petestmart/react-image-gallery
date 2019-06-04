const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/pool.js');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let like = req.body.like;
    let sqlText = '';
    // for(const galleryItem of galleryItems) {
        // if(galleryItem.id == galleryId) {
            sqlText = `UPDATE gallery_items SET likes=likes+1 WHERE id=$1`;
        // }
    // }
    
    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery_items ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Back from DB:`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
    
}); // END GET Route

module.exports = router;