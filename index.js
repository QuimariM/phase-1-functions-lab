// function distanceFromHqInBlocks(pickupLocation) {
   // const hqLocation = 42; 
   // const distance = Math.abs(hqLocation - pickupLocation);
   // return distance;
// }

function distanceFromHqInBlocks (pickupLocation){
    const hqLocation = 42;
    const distance = Math.abs(hqLocation- pickupLocation)
    return distance
    
}
function distanceFromHqInFeet(pickupLocation){
    distanceFromHqInBlocks(hqLocation)
    const hqLocation = 42;
    const manhattan = 264; 
    const distanceInFeet = Math.abs((hqLocation-pickupLocation)*manhattan)
    return distanceInFeet
}
function distanceTravelledInFeet(start, destination){
    const manhattan = 264
    const distanceTravelled = Math.abs((start - destination)*manhattan)
    return distanceTravelled
} distanceTravelledInFeet(32, 28)




/*function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(distance)
const fare = 2.65
const distance = (distance > 400 && distance < 2000)
 return fare * 0
}
calculatesFarePrice(43, 44)

function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(distance)
const fare = 2.65
const distance = (distance > 400 && distance < 2000)
 return fare 
}
calculatesFarePrice(43, 44)
 
/*function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(distance)
    const fare = 2.56
    const distance = 528 - 400
    return fare 

}
calculatesFarePrice(34, 32)*/

function calculatesFarePrice(start, destination){   
const fare = 0
if (distance < 400 ){
    return fare * 0
}
else if (distance > 400 && distance < 2000){
    return fare + (distance - 400) * 0.02 
}

 else if (distance > 2000 && distance < 2500){
    return 25
 }

 else if (distance > 2500 ){
        return 'cannot travel that far'
    }
}
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)
