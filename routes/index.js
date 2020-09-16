'use strict';

const express = require('express');
const router = express.Router();
const indexModel = require('../models/indexModel');

router.get('/', async (req, res) => {
    const languageData = await indexModel.getAll();

    res.render('template', {
        locals: {
            title: 'Language Rating',
            data: languageData
        },
        partials: {
            partial: 'partial-index'
        }
    });
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const dbResponse = await indexModel.updateStatus(6, "HTML");
    console.log("DB response:", dbResponse);
    res.status(200).send("OK").end();
})

module.exports = router;