// HTML DOM Element title
// EXAMPLE 1
const element = document.getElementById('myAbbr');
document.getElementById('demo').innerHTML = element.title;

// EXAMPLE 2
function myFunction() {
    const element2 = document.getElementById("myH2");
    element2.title = "The World's Largest Web Development Site";
}

// HTML DOM Document title
// EXAMPLE 1
document.getElementById("demo3").innerHTML = document.title;

// EXAMPLE 2
document.title = "A new title";
document.getElementById("demo4").innerHTML = document.title;