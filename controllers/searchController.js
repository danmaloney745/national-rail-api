const DataModel = require("../models/departuresModel");
const FetchDepartures = require("../lib/fetchDepartureBoard");

class SearchController {
    static sendSearchRequest(req, res) {

        FetchDepartures.getData(req.body.searchQuery)
            .then (result => {
                const trainData = new DataModel(result);

                res.status(200).send({
                    result: trainData
                });
            })
            .catch(err => {
                res.status(400).send(err.message);
                console.log(err);
            })
    } 
}

module.exports = SearchController;