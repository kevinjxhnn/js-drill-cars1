const { inventory } = require("../inventoryData")
const { onlyBMWAndAudi } = require("../problem6")

let listOfCars = onlyBMWAndAudi(inventory)
console.log(JSON.stringify(listOfCars))
