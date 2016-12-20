$(() => {
    $(`#button`).on('click', ( () => {
    $.ajax({
        url: '/dept-data',
        method: 'POST',
        })
        .then((data) =>  {    
            let theData = data.result;
            console.log(theData);
            for(let i = 0; i < 10; i++) {
                $(`#loc${i+1}`).append(`${theData.origin[i]}  `);
                $(`#dest${i+1}`).append(`${theData.destination[i]}  `);
                $(`#plat${i+1}`).append(`${theData.platformNum[i]}  `);
                $(`#est${i+1}`).append(`${theData.estimatedDeptTime[i]}  `);
                $(`#sch${i+1}`).append(`${theData.scheduledDeptTime[i]}  `);
            }          
        });
    }));       
});