const FetchDepartures = require("../lib/fetchDepartureBoard");
const DataModel = require("../models/departuresModel");

class DeparturesController {
    static showDept(req,res){
        res.render("departures");
    }

    static getDeptData(req,res){
        FetchDepartures.getData()
            .then(result => {
                const trainData = new DataModel(result);
                console.log(trainData);
                res.status(200).send({
                    result: trainData
                });
            })
            .catch(err => {
                res.status(400).send(err);
                console.log(err);
            })
    }
}

module.exports = DeparturesController;

