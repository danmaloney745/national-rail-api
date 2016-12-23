$(() => {
    $(`#submitSearch`).click( (e) => {
       e.preventDefault();
       emptyTable();
        //Pass in the search query from the user, ensure the text is upper case in order to read from the SOAP API
        let crsCode = $("#searchQuery").val().toUpperCase();

        //Ensure the passed in string meets the requirements of a CRS code (3 chars).
        if(crsCode.length < 3 || crsCode.length > 3) {
            console.log('You must enter three digits');
        }
        else {   
            console.log(crsCode);
            $.ajax({
                dataType: 'json',
                url: '/search',
                method: "POST",
                data: {
                    searchQuery: crsCode
                },
                success: displayData
            });
        }
    });

    //Resets the table data every search
    let emptyTable = (data) => {
        $( "#dest" ).empty();
        $( "#loc" ).empty();
        $( "#sch" ).empty();
        $( "#est" ).empty();
        $( "#plat" ).empty();
    }

    //If the post request is sucessful populate the HTML with the data. Bloated method that needs condensing.
    let displayData = (data) =>  {  
        let theData = data.result;

        for(let i in theData.destination) {
            let theDataObject = theData.destination[i];
            $(`#dest`).append(`<p>${theDataObject}</p>`);
        }
        for(let i in theData.origin) {
            let theDataObject = theData.origin[i];
            $(`#loc`).append(`<p>${theDataObject}</p>`);
        }
        for(let i in theData.scheduledDeptTime) {
            let theDataObject = theData.scheduledDeptTime[i];
            $(`#sch`).append(`<p>${theDataObject}<p>`);
        }
        for(let i in theData.estimatedDeptTime) {
            let theDataObject = theData.estimatedDeptTime[i];
            $(`#est`).append(`<p>${theDataObject}<p>`);
        }
        for(let i in theData.platformNum) {
            let theDataObject = theData.platformNum[i];
            $(`#plat`).append(`<p>${theDataObject}<p>`);
        }
    }
}); 