const { inventory } = require("./inventoryData")

// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car

function findInfoOfCarWithId33(inventory){
    let flag = false;
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].id == 33){
            console.log(`Car 33 is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`)
            flag = true
            break
        } 
    }
    
    if (!flag){
        console.log("Car is not found")
    }
    
}

module.exports = { findInfoOfCarWithId33 };




