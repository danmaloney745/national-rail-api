const soap = require('soap');
const url = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx?ver=2016-02-16';
const auth =  "ba650c0e-3cfd-479b-ba7f-c6fd6a21c0f7";

let args = {
    numRows: 10,
    crs: 'CLJ' 
};

let authentication = {
    AccessToken: {
        TokenValue : auth
    }
}

class FetchData {
    static getData(){
        return new Promise(
            (resolve, reject) => {
                soap.createClient(url, (err, client) => {
                    client.addSoapHeader(authentication);   
                    client.GetDepartureBoard(args, (err, result) => {
                        console.log(result.GetStationBoardResult.trainServices);
                        err ? reject(err) : resolve(result);
                    });
                });
            }
        );
    }
}

module.exports = FetchData;