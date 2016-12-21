$(() => {
    $(`#submitSearch`).click( (e) => {
       e.preventDefault();
        let crsCode = $("#searchQuery").val();
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
    });

    let displayData = (data) =>  {  
        console.log(data);  
        let theData = data.result;
        for(let i = 0; i < 10; i++) {
            $(`#loc${i}`).append(`${theData.origin[i]}  `);
            $(`#dest${i}`).append(`${theData.destination[i]}  `);
            $(`#plat${i}`).append(`${theData.platformNum[i]}  `);
            $(`#est${i}`).append(`${theData.estimatedDeptTime[i]}  `);
            $(`#sch${i}`).append(`${theData.scheduledDeptTime[i]}  `);
        }
    }
}); 