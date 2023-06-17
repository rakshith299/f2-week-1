let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let developerArr = arr.map(function(each){
        if(each.profession === "developer"){
             return each.name;
        }
    })

     developerArr = developerArr.filter((each) => {
         if(each !== undefined){
            return each;
        }
    })

    console.log(developerArr);
  }
  
  function PrintDeveloperbyForEach() {

    let devArr = [];
    
    let developer = arr.forEach(function(each, index, arr){
        if(each.profession === "developer"){
             devArr.push(arr[index].name);
        }
    })

    console.log(devArr);
  }
  
  function addData() {
    
    let tempObj = {
        id: 4,
        name: "susan",
        age: "20",
        profession: "intern"

    };

    arr.push(tempObj);
    console.log(arr);
  }
  
  function removeAdmin() {
    
    let adminRemovedArr = arr.forEach((each, index, arr) => {
        if(each.profession === "admin"){
            arr.splice(index, 1);
        }
    })

    console.log(arr);
  }
  
  function concatenateArray() {
    let arr2 = [
      { id: 5, name: "Blackley", age: "22", profession: "developer" },
      { id: 6, name: "James", age: "26", profession: "doctor" },
      { id: 7, name: "Catherine", age: "54", profession: "Lawyer" },
    ]

    arr = arr.concat(arr2);

    console.log(arr);
  }