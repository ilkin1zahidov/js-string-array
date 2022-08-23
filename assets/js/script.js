"use strict"

//  let country = "Azerbaycan";

//  let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

//  let span = document.querySelector(".text");

//  console.log(span);

//  span.innerHTML= text.substring(0,50) + " ...";

//  span.addEventListener("click",function(){
//     span.innerHTML = "text deleted";
//  })

// let num = 101;

// console.log(country.length);
// console.log(num.toString());

// for (const item of country) {
//         console.log(item); 
// }

// console.log(country[1]);

// console.log(country.toLowerCase());
// console.log(country.toUpperCase());

// console.log(country.slice(0,4));

// console.log(country.substring(0,7));

// let country = "Azerbaycan-Respublikasi-Mudafie-Nazirliyi";

//  let addStr = "   Respublikasi"
// console.log(country.substr(1,5));

// console.log(country.replace("Azerbaycan","Turkiye"));

// console.log(country.concat(addStr));

// console.log(addStr.trim());


// console.log(country.toLocaleLowerCase().startsWith("A"));


// if(country.startsWith("A")){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// console.log(country.charAt(5));

//  console.log(country.charCodeAt(0));

// let result = country.split("-");

// console.log(result);

//let country = "Azerbaycan-Respublikasi-Mudafie-Azerbaycan-Nazirliyi-Azerbaycan";


// console.log(country.indexOf("Mudafie"));



// function search(str) {
//     if(country.indexOf(str) == -1) {
//         console.log("Notfound");
//         return;
//     }

//     console.log("found");
// }

// search("Respublika")


//console.log(country.indexOf("Azerbaycan",15));

// let countryIndex = country.indexOf("Azerbaycan",15);
// let result = country.substring(0,countryIndex) + " ...";


// console.log(countryIndex);
// console.log(result);

// let city = "Baki";

// console.log(city.includes("a"));


// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10.33"));
// console.log(Number("John"));

// Number(true);
// Number(false);
// Number("10");
// Number("  10");
// Number("10  ");
// Number(" 10  ");
// Number("10.33");
// Number("10,33");
// Number("10 33");
// Number("John");



// let count = "number"

// console.log(typeof count);

// let result = parseInt(count);

// console.log(typeof result);

//let users = ["Ilkin", "Seid", "Sadiq" ,"Esqin","Haqverdi"];

// console.log(users.toString());

// console.log(users.join("-"));

//users.push("Ramil")

//users.pop()

//users.shift()

// users.unshift("Hello")

// console.log(users);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);

// users.splice(2,3,"Mirsamir")
// console.log(users);

// let users = ["Ilkin", "Seid", "Sadiq" ,"Esqin","Haqverdi"];

// console.log(users);

// let result = users.slice(0,3);

// console.log(result);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const citrus = fruits.slice(2,3)
// console.log(citrus);

const points = [40, 100, 1, 5, 25, 10];
console.log(points);
points.sort(function(a, b){return a - b});
console.log(points);