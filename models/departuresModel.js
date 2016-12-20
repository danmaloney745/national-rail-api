
class DeparturesModel {

    constructor(obj){
        //define arrays for parameters
        this.scheduledDeptTime = [];
        this.estimatedDeptTime = [];
        this.platformNum = [];
        this.origin = [];
        this.destination = [];

        for(let i = 0; i < 10; i++){
            this.scheduledDeptTime[i] = obj.GetStationBoardResult.trainServices.service[i].std;
            this.estimatedDeptTime[i] = obj.GetStationBoardResult.trainServices.service[i].etd;
            this.platformNum[i] = obj.GetStationBoardResult.trainServices.service[i].platform;
            this.origin[i] = obj.GetStationBoardResult.trainServices.service[i].origin.location[0].locationName;
            this.destination[i] = obj.GetStationBoardResult.trainServices.service[i].destination.location[0].locationName;
        }
    }
}

module.exports = DeparturesModel;