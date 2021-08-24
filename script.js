document
console.log(document);
document.title
document.title="basics-dom";
console.log(document.title);


// getElementById
// getElementsByTagName
// getElementsByClassName
// queryselector
// queryselector all



// getElementById
let heading= document.getElementById("access101");
console.log(heading);

// getElementsByTagName
let heading=document.getElementsByTagName("h1");
console.log(heading);

// getElementsByClassName
let heading= document.getElementsByClassName("para");
console.log(heading);

// queryselector
let heading=document.querySelector("h1");
console.log(heading);

let heading=document.querySelector(".para");
console.log(heading);

let heading=document.querySelector("#access101");
console.log(heading);
// limitation of query selector is when there are more number of same tags then it access only the first tag, it wont access the remaining tags
let heading=document.querySelector("p");
console.log(heading);


// queryselector all
let heading=document.querySelectorAll(".access101");
console.log(heading);

// use query selector all, it access all the elements or tags but queryselector access only the first element
let heading=document.querySelectorAll("p");
console.log(heading);



