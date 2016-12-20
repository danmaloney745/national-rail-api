
class DeparturesModel {

    constructor(obj){
        if(!obj.locationName){
            throw new Error("Location Name not found");
        } else {
            this.locationName = obj.GetStationBoard.locationName;
        }

        if(!obj.schedDepTime){
            throw new Error("Location Name not found");
        } else {
            this.schedDepTime = obj.GetStationBoard.trainServices.service[0].etd;
        }

        if(!obj.estDepTime){
            throw new Error("Location Name not found");
        } else {
            this.estDepTime = obj.GetStationBoard.trainServices.service[0].eta;
        }
    }

    returnDeparturesRequest(){
        return this;
    }

}

module.exports = DeparturesModel;