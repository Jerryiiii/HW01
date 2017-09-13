function colorud(){
if (getColor()=="blue"){
down()
down()
down()}
  else{
  up()
  up()
  up()}
}
function colorlr(){
  if(getColor()=="blue"){
    right()}
  else
    left()
}
function color1step(){
  if(getColor()=="blue"){
    down()}
  else
    up()}
right()
var blue=getColor()
colorud()
colorlr()
setColor(blue)
color1step()
