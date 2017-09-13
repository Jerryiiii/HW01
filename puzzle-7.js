function redR(){
  if (getColor()=="red"){
    right()
    right()}
}
function downToRed(){
  while(getColor()!="red"){
    down()}
}
function upToRed(){
  while(getColor()!="red"){
    up()}
}
downToRed()
redR()
upToRed()
redR()
downToRed()
redR()
upToRed()
redR()
downToRed()
right()
