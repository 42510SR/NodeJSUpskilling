//Arrays
//Find method
let arr=[1,5,10];
let match =arr.find(i=>i>5);
console.log(match); //10

//FindIndex - returns index of firts occurence match

var match2= arr.findIndex(i=>i>3);
console.log(match2); //1

//fill() - should fill entire array when called

let arr2=[1,2,3,4,5];
arr2.fill('2');
console.log(arr2); // [ '2', '2', '2', '2', '2' ]

arr2.fill('a',2,3); // 2 is starting index, 3 is end index after which array is not filled.
console.log(arr2[2]); // 'a'
console.log(arr2[3]); // 2

//copyWithin - should copy elements 
//array.copyWithin(target index, copy from no of elemnts to copy);

var arr3 = [1,2,3,4];
//arr3.copyWithin(2,0);// [1,2,1,2]
//arr3.copyWithin(0,-2); //[3,4,3,4];
arr3.copyWithin(1,2); // [ 1, 3, 4, 4 ]
console.log(arr3);

//Array.of(param)- should create a new array with arg.

let arr4= new Array(3); //length 3
let arr5= Array.of(3); // length 1
console.log(arr5); // [ 3 ]

//entries

var a =['j','g','john'];
var entries = a.entries();
let firstEntry = entries.next().value;
console.log(firstEntry); //[ 0, 'j' ]
console.log(firstEntry[0]); // firstEntry[0] - this is the index 0 
console.log(firstEntry[1]); //firstEntry[0] - this is the value j

//Example 2

const ab = ["a", "b", "c"];

for (const [index, element] of ab.entries()) {
  console.log(index, element);
}
//output
// 0 'a'
// 1 'b'
// 2 'c'

//Keys() -is used to return a new array iterator which contains the keys for each index in the given input array1.

var keys = ab.keys();
for (const index of keys) {
    console.log("Index",index); //output: Index 0 Index 1 Index 2
}
// var f = keys.next().value;
// console.log(f); //0

//Set

let set=new Set();
set.add("1","1");
console.log(set);

//Duplicate set 1 in set 2

let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
console.log("Set 1 is",set1);
let set2= new Set(set1.values());
console.log("Set 2 is ",set2);

//Maps

let map = new Map();
console.log(map.size);//0

map.set("age",23);
console.log(map.size); //1

console.log(map.get("age")); //23

let obj ={'name':'Shagun'};
map.set(obj,24);
console.log(map); //{ 'age' => 23, { name: 'Shagun' } => 24 }

console.log(map.has('age')); //true

let key ={};
map.set(key,'first'); //{ 'age' => 23, { name: 'Shagun' } => 24, {} => 'first' }
map.set(key,'second'); //{ 'age' => 23, { name: 'Shagun' } => 24, {} => 'second' }

console.log(map.get(key)); //second
let key1 ={};
let key2 ={};
map.set(key1,100);
map.set(key2,200);
console.log(map); 
// output 
// Map(5) {
//     'age' => 23,
//     { name: 'Shagun' } => 24,
//     {} => 'second',
//     {} => 100,
//     {} => 200

console.log(map.has(key2));//true
map.delete(key2);
console.log(map.has(key2)); //false

// let map2 = new Map[['name':"Shagun"]]
// console.log(map2);

//WeakSet , WekaMap - does not have properties related to entire set, can delete, remove all, and checks if any key is present or not
// Map and Set objects are strongly held and will not allow for garbage collection. 
//These are ‘weak’ because they allow for objects which are no longer needed to be cleared from memory.
let weakSet = new WeakSet();
console.log(weakSet.size); //undefined
console.log(weakSet.entries); //undefined
console.log(weakSet.values); //undefined
console.log(weakSet.forEach); //undefined


