const soap = require('soap');
const url = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx?ver=2016-02-16';
const auth = "ba650c0e-3cfd-479b-ba7f-c6fd6a21c0f7";

const authentication = {
    AccessToken: {
        TokenValue : auth
    }
}

class FetchData {
    //A function that promises a new Soap Client is instantiated when the user tries to access the data model
    static getData(crsCode){

        // Two required parameters that must be passed through when collecting the data from the SOAP API.
        // The number of rows is hardcoded for the time being. The crsCode is passed in from the user.
        const args = {
            //required
            numRows: 10,
            crs: crsCode,

            //optional
            timeOffset: 0,
            timeWindow: 100
        };

        /* A promise function that defines a SOAP client and accesses the SOAP API with the passed in arguments
         * for this particular API I am accessing the GetDepartureBoard method.
         */
        return new Promise(
            (resolve, reject) => {
                soap.createClient(url, (err, client) => {
                    
                    //Send soap header with the required token value
                    client.addSoapHeader(authentication);   
                    
                    //Access the defined method in the WSDL file (GetDepartureBoard), pass in the required args(numRows, crsCode)
                    client.GetDepartureBoard(args, (err, result) => {
                        err ? reject(err) : resolve(result);
                    });
                });
            }
        );
    }
}

module.exports = FetchData;