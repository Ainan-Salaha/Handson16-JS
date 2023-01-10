function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();



for (var i = 0; i < 3; i++) {
    //i=0,1,2,i=3 condition fails and after runing settimeout the current value of i is 3 
    console.log("up", i)
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);//-->it gng to return 3 time so the output is 3
 console.log("down", i)  ;
}


/* 4.Question*/
function lenFun(width){ //--> outer functn
    function brFun(length){ //-->inner functn
        return width*length
    }
    //console.log(brFun(20))
    return brFun(20);
}

console.log(lenFun(10));

//lenFun(20)

 

/*5.Question */

function outer(n){
  function inner(){
    n++;
    console.log(n)
  }
  inner()
  inner()
  inner()
}
outer(100)

/*6.Question */
/* --> it run only one time and its is call iife-immediately invoked function expression
(function (){

})(); */
var a = 12;
(function () {
   alert(a); 
  })();

/*7.Question */
  var a = 10;
  var x = (function () {
  var a = 12;
  return function () {
  alert(a);
  };
  })();
  x(); 

/*8.Question */
  var globalVar = "xyz";

  (function outerFunc(outerArg) {
      var outerVar = 'a';

      (function innerFunc(innerArg) {
          var innerVar = 'b';

          console.log(
              "outerArg = " + outerArg + "\n" +
              "innerArg = " + innerArg + "\n" +
              "outerVar = " + outerVar + "\n" +
              "innerVar = " + innerVar + "\n" +
              "globalVar = " + globalVar);

      })(456);
  })(123);