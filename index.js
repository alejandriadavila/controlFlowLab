// Goals:
// Monitor plant growth
// Predict plant growth
// make decisions based on available space & predicted growth

// Calculate the area of the plant garden
const PI = 3.1415
const radius = 5
const area = PI * radius * radius

//Minimum plant space needed for growth
const plantSpace = .8
const maxCapacity = area / plantSpace

// Amount of plants and the projected growth per week
let starterPlants = 20
let weeks = 0
// let weekGrowth = starterPlants * (2 ** weeks)
// console.log (weekGrowth)
    // starterPlants * 2

    // Predict plant growth after a specific number of weeks
if (weeks = 1){
    let totalGrowth = starterPlants * (2 ** weeks)
    let capacityPercentage = totalGrowth / maxCapacity
    console.log(capacityPercentage)
    // Decide whether or not to prune 
}