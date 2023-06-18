function checkSpeed(carSpeed){
    const speedLimit = 70;
    const demeritPoint = 5;
    const pointsThreshold = 12;

    if (carSpeed <speedLimit){
        return "Ok"
    }else{
        const excessSpeed = carSpeed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed/demeritPoint);
        if (demeritPoints > pointsThreshold){
            return "License suspended";
        }else{
            return "Points:" + demeritPoints;
        }
    }
    
}
var carSpeed = parseInt("100");//input car speed
checkSpeed(carSpeed)
console.log(checkSpeed(carSpeed))