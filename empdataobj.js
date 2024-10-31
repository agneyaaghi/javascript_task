let employee={name:"Anu",id:1,address:{street:"vatakara",city:"calicut",zipcode:"1234"},
              department:{name:"IT",location:"class1"}};
console.log(employee);
employee.address.zipcode="6789";
console.log(employee);
delete employee.department.location;
console.log(employee);
console.log(employee.address.city);
console.log(employee.department.name);