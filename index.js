"use strict"

const request = require('request');

class Client {
    constructor(serverURL) {
        this.serverURL = serverURL;
    }

    get(table, cb) {
        request.get({url: this.serverURL + "/get/" + table, json: true}, (err, res, body) => {
            return cb(err, body);
        });
    }

    put(table, values, cb) {
        request.post({url: this.serverURL + "/put/" + table, body: values, json: true}, (err, res, body) => {
            return cb(err, body);
        });
    }
}

module.exports = Client;
