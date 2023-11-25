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
let totalGrowth = starterPlants * (2 ** weeks)

// Predict plant growth after a specific number of weeks
if (weeks = 1){
    let totalGrowth = starterPlants * (2 ** weeks)
    let capacityPercentage = (totalGrowth / maxCapacity) * 100
        if (capacityPercentage > 80){
            console.log(`Week 1 Results: The garden is at ${Math.trunc(capacityPercentage)}% capacity, Pruning is recommended.`)
        } else if(capacityPercentage >= 50){
            console.log(`Week 1 Results: The garden is at ${Math.trunc(capacityPercentage)}% capacity, Monitoring is recommended.`)
        } else{
            console.log(`Week 1 Results: The garden is at ${Math.trunc(capacityPercentage)}% capacity, Additional Planting is recommended.`)
        }
    }

if (weeks = 2){
        let totalGrowth = starterPlants * (2 ** weeks)
        let capacityPercentage = (totalGrowth / maxCapacity) * 100
            if (capacityPercentage > 80){
                console.log(`Week 2 Results: The garden is at ${Math.trunc(capacityPercentage)}% capacity, Pruning is recommended.`)
            } else if(capacityPercentage >= 50){
                console.log(`Week 2 Results: The garden is at ${Math.trunc(capacityPercentage)}% capacity, Monitoring is recommended.`)
            } else{
                console.log(`Week 2 Results: The garden is at ${Math.trunc(capacityPercentage)}% capacity, Additional Planting is recommended.`)
            }
        }

if (weeks = 3){
            let totalGrowth = starterPlants * (2 ** weeks)
            let capacityPercentage = (totalGrowth / maxCapacity) * 100
                if (capacityPercentage > 80){
                    console.log(`Week 3 Results: The garden is at ${Math.trunc(capacityPercentage)}% capacity, Pruning is recommended.`)
                } else if(capacityPercentage >= 50){
                    console.log(`Week 3 Results: The garden is at ${Math.trunc(capacityPercentage)}% capacity, Monitoring is recommended.`)
                } else{
                    console.log(`Week 3 Results: The garden is at ${Math.trunc(capacityPercentage)}% capacity, Additional Planting is recommended.`)
                }
            }

if (weeks = 10){
    let starterPlants = 100
    let totalGrowth = starterPlants * (2 ** weeks)
    let spaceNeeded = totalGrowth * plantSpace
    console.log(`The amount of space needed to start with 100 plants and not prune for ten weeks is: ${spaceNeeded} meters`)
    let newRadius = Math.sqrt(spaceNeeded / PI)
    console.log(`The reccommended radius for an expanded garden would be ${newRadius}`)
}