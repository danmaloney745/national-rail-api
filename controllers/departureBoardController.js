const FetchDepartures = require("../lib/fetchDepartureBoard");

class DeparturesController {
    static showIndex(req,res){
        res.render("departures");
    }

    static getData(req,res){
        FetchDepartures.getData()
            .then(result => {
                res.status(200).send({
                    numRows: req.body.getData,
                    crs: req.body.crs
                });
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
}

module.exports = DeparturesController;

