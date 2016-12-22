$(() => {
    $(`#submitSearch`).click( (e) => {
       e.preventDefault();
       
        let crsCode = $("#searchQuery").val().toUpperCase();

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