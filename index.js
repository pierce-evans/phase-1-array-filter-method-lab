// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'].toLowerCase();

function findMatching(drivers, name){

        return drivers.filter(element => element.toLowerCase() === name.toLowerCase())
     }

function fuzzyMatch(drivers, name){
    return drivers.filter(element => element.slice(0,name.length).toLowerCase() === name.toLowerCase())
}
function matchName(drivers, name){
    return drivers.filter(element => element.name.toLowerCase() === name.toLowerCase())
}