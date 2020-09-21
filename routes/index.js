'use strict';

const express = require('express');
const router = express.Router();
const indexModel = require('../models/indexModel');

const renderPage = async res => {
    const languageData = await indexModel.getAll();
    const ratingData = await indexModel.getRatingNames();

    res.render('template', {
        locals: {
            title: 'Language Rating',
            languageData: languageData,
            ratingData: ratingData
        },
        partials: {
            partial: 'partial-index'
        }
    });
}

router.get('/', async (req, res) => {
    renderPage(res);
});

router.post('/', async (req, res) => {
    res.send("ok").end();
    // for (let key in req.body) {
    //     await indexModel.updateStatus(req.body[key], key);
    // }
    // renderPage(res);
})

module.exports = router;