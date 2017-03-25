//scope

(() => {
  outage =20;       //global
  var height = 170;//local
  if(outage == 20) height = 180;
  console.log('height = ${height}');

}) ();


console.log('outage = ${outage}');
console.log('height = ${height}');



//LET & VAR

var a = 5;
var b = 10;

if(a===5){
  let a = 4; // scope inside if block
  var b = 1; // scope inside function

  console.log(a); //4
  console.log(b); //1
}


console.log(a); //5
console.log(b); //1
