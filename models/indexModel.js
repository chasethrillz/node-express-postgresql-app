'use strict';

const db = require('./conn');

class LanguageRatings {
    constructor(name) {
        this.name = name;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM languages INNER JOIN ratings ON languages.rating_id = ratings.id;`);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = LanguageRatings