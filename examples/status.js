var GoPro = require('../lib/index.js');
var cam = new GoPro.Camera({maxRetries: 1, timeout: 2000});

/*
**  Read one state
*/
getStatusBatteryAsync = async function (){
    try {
        let battery_level = await cam.status(GoPro.Status.InternalBatteryLevel);
        console.log('[battery level] = ', battery_level);
    } catch(err){
        console.log("error: " +err);
    }
}

/*
**  Read all the status
*/
getStatusAllAsync = async function (){
    try {
        let status = await cam.status();
        console.log('[status] = ', status);
    } catch(err){
        console.log("error: " +err);
    }
}

/*
**  Main
*/
mainAsync = async function() {
    console.log("getting battery level ...");
    await getStatusBatteryAsync();
    console.log("getting all status info ...");
    await getStatusAllAsync();
    console.log("end");
}();

