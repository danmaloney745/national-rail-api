const express = require("express");
const soap = require('soap');
const url = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx?ver=2016-02-16';
var auth =  "ba650c0e-3cfd-479b-ba7f-c6fd6a21c0f7";
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const app = express();

//view options
app.set('view engine', 'ejs');

//Middleware

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

//Routes 
app.use(routes);

let soapHeader = { 
    AccessToken: {
        TokenValue : auth
    }
};

let args = {
    numRows: 10,
    crs: 'CLP'
};

//Connect to WSDL
soap.createClient(url, (err, client) => {
    client.addSoapHeader(soapHeader);
    console.log(soapHeader);

    client.GetDepartureBoard(args, (err, result) => {
        if(err) throw err;
        console.log(result.GetStationBoardResult.trainServices.service);
    });
});


//Port
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port 3000 ${process.env.PORT || 3000}`);
});