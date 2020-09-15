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

module.exports = router;