const soap = require('soap');
const url = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx?ver=2016-02-16';
const auth =  "ba650c0e-3cfd-479b-ba7f-c6fd6a21c0f7";

class FetchData {
    static setSoapHeader(obj){
        return new Promise(
            (resolve, reject) => {
                authentication = {
                    AccessToken: {
                        TokenValue : auth
                    }
                }
                soap.addSoapHeader(request, function(response) {
                    console.log(response.statusCode);
                    console.log(response.body);
                    console.log(request.headers);
                    if(response.statusCode === 202){
                        resolve();
                    } else {
                        reject("An Error has occurred.");
                    }
                });
            }
        )
    }

    static createSoapClient() {
        return new Promise(
            (resolve,reject) => {
                soap.createClient(url, (err,client) => {
                    if(result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {
                        console.log(result);
                        resolve(result);
                    }
                });
            }
        )
    }
}

module.exports = FetchData;