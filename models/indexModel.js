'use strict';

const db = require('./conn');

class LanguageRatings {
    constructor(name, ranking_id) {
        this.name = name;
        this.ranking_id = ranking_id;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM languages INNER JOIN ratings ON languages.rating_id = ratings.id;`);
            return response;
        } catch (error) {
            return error.message;
        }
    }

    static async getRatingNames() {
        try {
            const response = await db.any(`SELECT * FROM ratings;`);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async updateStatus(rank_id, topic) {
        try {
            const response = await db.result(`UPDATE languages SET rating_id = $1 WHERE name = $2;`,
                [rank_id, topic]);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

module.exports = LanguageRatings