class SearchDepartures {
    constructor(obj) {
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