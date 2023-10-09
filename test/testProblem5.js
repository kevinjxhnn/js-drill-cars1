const { inventory } = require("../inventoryData")
const { getNumberOfCarOlderThan2000 } = require("../problem5")


const numberOfCarOlderThan2000 = getNumberOfCarOlderThan2000(inventory).length
console.log(numberOfCarOlderThan2000)

