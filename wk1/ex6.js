// 使用vscode觀察closure形成的時機
var addclosure = ( () => {
  var counter = 0;
  return () =>{
    counter++;
    console.log(counter);
  }
}) ();


addclosure();
addclosure();
addclosure();



var add = (x) =>{
  return (y) =>{
    console.log(x+y);
  };
}

var add5 = add(5);
add5(3);


var multiple = (q) =>{
  return(w) =>{
    console.log(q*w);
  };
}

var multiple5 = multiple(5);
multiple5(10);
