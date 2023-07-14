console.log("B1")
const person = {
    firstName: "John",
    lastName: "Doe",
}
person["middleName"]="Alex"
console.log(person)
console.log(person["lastName"])


console.log("B2")
let myDog = {
    name: "Goki",
    legs: 4,
    friends: "Adee"
}
myDog["name"]= "Husky"
myDog["color"]="Black"
console.log (myDog)

console.log("B3")
var years=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
for (var a=0; a<years.length; a++){
    if (years[a] % 2 === 0){
    console.log(years[a])
    }
}
for (var b=0; b<years.length; b++){
    if (years[b] % 2 === 1){
    console.log(years[b])
    }
}
for (var c=0; c<years.length; c++){
    if (years[c] % 4 === 0){
    console.log(years[c])
    }
}

console.log("B4")
var fruits=["Mango","Strawberry","Blueberry","Kiwi"]
console.log(fruits)
fruits[1]="Orange"
fruits[2]="Watermelon"
console.log(fruits)

console.log("B5")
let year=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
let x=0
while (x<year.length){
    if (year[x] % 2 === 0){
    console.log(year[x])
    }
    x++
}
let y=0
while (y<year.length){
    if (year[y] % 2 === 1){
    console.log(year[y])
    }
    y++
}
let z=0
while (z<year.length){
    if (year[z] % 4 === 0){
    console.log(year[z])
    }
    z++
}
