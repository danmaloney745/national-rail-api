const soap = require('soap');
const url = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx?ver=2016-02-16';
const auth =  "ba650c0e-3cfd-479b-ba7f-c6fd6a21c0f7";

let soapHeader = { 
    AccessToken: {
        TokenValue : auth
    }
};

let args = {
    numRows: 10,
    crs: 'CLP'
};

soap.createClient(url, (err, client) => {
    client.addSoapHeader(soapHeader);

    client.GetDepartureBoard(args, (err, result) => {
        if(err) throw err;
        console.log(result.GetStationBoardResult.trainServices.service);
    });
});