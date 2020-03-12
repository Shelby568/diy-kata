const reachDestination = (distance, speed) => {
 let x = distance / speed;
 let a = Math.round(x*2)/2;
 return 'I should be there in ' + a + ' hours.';
 
};

module.exports = reachDestination;
