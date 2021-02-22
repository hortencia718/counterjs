// create an empty variable count for your counter 
let count= 0
// create a function the number is grabing a number from the count
function changeCount(number){
count += number;
// get the element by its "id" count 
document.getElementById("count").innerHTML = count;
}