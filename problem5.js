const {inventory} = require ("./inventoryData")
const { allCarYear } = require("./problem4")

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.


function getNumberOfCarOlderThan2000(inventory){
    const carYears = allCarYear(inventory)
    const olderThan2000 = [];

    for(let i = 0; i < carYears.length; i++){
        if(carYears[i] < 2000) {
            olderThan2000.push(carYears[i]);
        }
    }

    return olderThan2000
}



module.exports = {getNumberOfCarOlderThan2000}