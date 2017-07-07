//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name){
  if(name == "Tyler"){
    return true;
  }
  else{
    return false;
  }
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName(){
  var userName = prompt("Please enter your name", "George Orwell");
  return userName;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome(){
    alert("Welcome, "+ getName());
  }

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  //an argument is the code being applied to a variable or paramater in order to change or manipulate those variale or parameters in some way
  //a parameter is a placeholder variable used in functions to be worked with in place of the variables/data that are sent to that functions


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  // 0, NaN, Undefined, false, null, " " - if it evaluates to false when used in an if statement


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName(){
    return "Dylan";
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  newMyName = myName;
//Now alert the result of invoking newMyName
  alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn(){
    return function(){
      return myName();
    }
  }
//Now save the result of invoking outerFn into a variable called innerFn.
  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();
