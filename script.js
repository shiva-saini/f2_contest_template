/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
 let employees =  arr.map((obj) =>{
    
     if(obj.profession === "developer"){
      console.log(obj.name);
     }
  })
  
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((obj) => {
    if(obj.profession === "developer"){
      console.log(obj.name);
     }
  })
}

function addData() {
  //Write your code here, just console.log
  let data = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(data);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let updated = arr.filter((obj) => {
        return obj.profession !== "admin";
  })
  arr = updated
  console.log(updated);
  // console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let anotherArray = [
    { id: 5, name: "leo", age: "20", profession: "admin" },
    { id: 6, name: "tdz", age: "23", profession: "intern" },
    { id: 7, name: "joe", age: "26", profession: "admin" },
  ]

  let arr1 = [...arr,...anotherArray];
  console.log(arr1);
}

// PrintDeveloperbyMap();

// PrintDeveloperbyForEach();

// addData();
// removeAdmin();

// concatenateArray();
