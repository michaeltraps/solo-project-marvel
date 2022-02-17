const express = require('express');
const comicController = require('./comicController');
const router = express.Router();

router.get(
    '/title',
    comicController.getComicTitle,
    (req, res) => {
        res.status(200).send(res.locals.titles);
    }
);

router.get(
    '/image',
    comicController.getComicImage,
    (req, res) => {
        res.status(200).send(res.locals.image)
    }
);

module.exports = router;