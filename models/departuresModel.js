
class DeparturesModel {

    constructor(obj){
        this.estimatedDeptTime = [];
        this.platformNum = [];
        this.origin = [];
        this.destination = [];
        this.scheduledDeptTime = [];

        let trainServices = obj.GetStationBoardResult.trainServices.service;
        
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