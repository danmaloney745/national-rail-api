class SearchDepartures {
    constructor(obj) {
        if(!obj.numRows){
            throw new Error("You must specify the amount of Rows to display");
        } else if(typeof obj.numRows != "number"){
            throw new Error("Amount of rows must be a number value");
        } else {
            this.numRows = obj.numRows;
        }

        if(!obj.crs){
            throw new Error("You must specify a valid CRS code (e.g 'PAD')");
        } else if(typeof obj.crs != "string"){
            throw new Error("CRS code must be a string vlaue");
        } else {
            this.crs = obj.crs;
        }
    }

    returnDepartureBoardRequest(){
        return this;
    }
}

module.exports = SearchDepartures;