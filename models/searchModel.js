/* Search Model class to ensure that a serch query is made before calling the data from the SOAP API */

class SearchModel {
    constructor(obj){
        /*  * Check if the obj.searchQuery exists *
            * Check if the searchquery is a string *
            * If searchQuery does not return an error message set the value equal to this object instance
        */
        if(!obj.searchQuery){
            throw new Error("You must include a first name");
        } else if(typeof obj.firstName != "string"){
            throw new Error("First name must be a string");
        } else{
            this.searchQuery = obj.searchQuery;
        }
    }
}

module.exports = SearchModel;