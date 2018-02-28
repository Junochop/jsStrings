//challenge #1

var numOfSandwhiches = 4 * 2;
console.log("numberOfSandwhiches is", numOfSandwhiches);

//challenge #2
var name = "juno";
var string = "hello, " + name + " how are you doing today?";
console.log(string);

//challenge #3
var DNA = "GCAT";
var RNA = DNA[0]+ DNA[1] + DNA[2] + "U";
console.log("RNA:", RNA);

//challenge #4
var animal = "AllIgator";

if (animal.toLowerCase() === "alligator")  {

    //console.log("small");
}else {
    console.log("big");
}

var yarn = "the better string";
var domString = "<h4>" + yarn + "<h4>";
var myDiv = document.getElementById('yarn-holder');
myDiv.innerHTML = domString;


//challenge #5
var str = "IBMWLOVEbmcatsbmw";
var domString2 = "<h1>" + str.replace(/[bmwBMW]/g, '') + "<h1>";
var myDiv2 = document.getElementById('str-holder');
myDiv2.innerHTML = domString2;

