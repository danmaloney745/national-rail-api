# national-rail-api
####Daniel Maloney

###Scope:
The purpose of this project was to be able to  show the live departures from a rail station:

###User Requirements:
- A user can search for a railway station.
- The departure board should be styled to look similar to a station departure board.
- Departures should be updated in near realtime.
- Bulletins should be viewable on each departure (if provided).

###Installing the API.
</br>The necessary dependencies for the API to work have been added to the package.json file.
Download the project and navigate to the project directory, then run the following command.

```npm install```

###Querying the National Rail API:
</br>This project communicates directly with the National Rail's **SOAP** API and returns a JSON response using **REST** principles.

###Original Response using SOAP:
```xml
    <lt2:generatedAt>2016-12-22T16:41:23.6090054+00:00</lt2:generatedAt>
    <lt2:locationName>Manchester Piccadilly</lt2:locationName>
    <lt2:crs>MAN</lt2:crs>
    <lt2:platformAvailable>true</lt2:platformAvailable>
    <lt2:trainServices>
        <lt2:service>
            <lt2:origin>
                <lt2:location>
                    <lt2:locationName>Manchester Piccadilly</lt2:locationName>
                    <lt2:crs>MAN</lt2:crs>
                </lt2:location>
            </lt2:origin>
            <lt2:destination>
                <lt2:location>
                    <lt2:locationName>Hull</lt2:locationName>
                    <lt2:crs>HUL</lt2:crs>
                </lt2:location>
            </lt2:destination>
            <lt2:std>16:41</lt2:std>
            <lt2:etd>On time</lt2:etd>
            <lt2:platform>4</lt2:platform>
            <lt2:operator>TransPennine Express</lt2:operator>
            <lt2:operatorCode>TP</lt2:operatorCode>
            <lt2:serviceID>rgc9JA/SoqJdW4TpEGrifg==</lt2:serviceID>
```
###Response Using this API:
```JSON
  service: 
   [ { std: '16:32',
       etd: '16:54',
       platform: '12',
       operator: 'Southern',
       operatorCode: 'SN',
       serviceType: 'train',
       length: '12',
       serviceID: 'GheS1GePc7NFaOPO/S7Llw==',
       origin: [Object],
       destination: [Object] 
       }
     ]
```
       
