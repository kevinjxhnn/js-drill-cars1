const { inventory } = require("./inventoryData")

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:


function InfoOfTheLastCar(inventory) {
    let size = inventory.length

    console.log(`"Last car is a ${inventory[size-1].car_make} ${inventory[size-1].car_model}`)

}

module.exports = {InfoOfTheLastCar}