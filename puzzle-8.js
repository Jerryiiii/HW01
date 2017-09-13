function down8(){
  var steps = 0 
while (steps < 8) {
down()
steps = steps + 1}
}
 function down7(){
  var steps = 0 
while (steps < 7) {
down()
steps = steps + 1}
}   
function up7(){
  var steps = 0
  while(steps < 7){
    up()
    steps = steps+1}
}
function right2(){
  right()
  right()
}
function ud(){
  right2()
  up7()
  right2()
  down7()
}
down8()
ud()
ud()
right()
