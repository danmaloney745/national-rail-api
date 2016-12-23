
class DeparturesModel {

    constructor(obj){
        //Define arrays for population.
        this.estimatedDeptTime = [];
        this.platformNum = [];
        this.origin = [];
        this.destination = [];
        this.scheduledDeptTime = [];

        /* Variable that defines the structure of the JSON, I experimented with many different
         * ways of trying to step through the JSON object but kept getting an error of undefined objects.
         * This code needs to be refactored using a depth first search
         */
        let trainServices = obj.GetStationBoardResult.trainServices.service;
        
        /* Step through the JSON string object and populate the arrays with the data.
         * Once again I know with the correct looping technique I will be able to tidy this up.
        */

        for(let i in trainServices) {
            this.origin[i] = trainServices[i].origin.location[0].locationName;
            this.destination[i] = trainServices[i].destination.location[0].locationName;
            this.platformNum[i] = trainServices[i].platform;
            this.estimatedDeptTime[i] = trainServices[i].etd;
            this.scheduledDeptTime[i] = trainServices[i].std;
        }

    }
}

module.exports = DeparturesModel;