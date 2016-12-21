const FetchDepartures = require("../lib/fetchDepartureBoard");
const DataModel = require("../models/departuresModel");

class DeparturesController {
    //Function to display the departure board page
    static showDept(req,res){
        res.render("departures");
    }

    //Function that retrieves the data from the library (fetchDepartureBoard), if the promise succeeds create a new datamodel, if not return the error.
    static getDeptData(req,res){
        FetchDepartures.getData(req.body.searchQuery)
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

