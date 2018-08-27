const fs = require('fs');


myUserFile = fs.readFileSync('./../data.json');
myUserObj = JSON.parse(myUserFile);

myUserObj.forEach((user) => console.log(user));
console.log('\n');

console.log(myUserObj[0]);

console.log('\n');

console.log(myUserObj[0].rollNO);





















// var getUsersArray = () => {
// 	try{
// 		var userStr = fs.readFileSync('./../data.json');
// 		return JSON.parse(userStr);
// 	}
// 	catch(e){
// 		return [];
// 	}
// };


 

// //var users = JSON.parse(usersStr);

// var users = getUsersArray();

// var user = {
// 	name:"Tuhin",
// 	email:"troy0870@gmail.com",
// 	collegeID:"BCT2015002",
// 	rollNo:"1510313002"
// };
// users.push(user);
// console.log(users);
// //users.push(user);

// //console.log(JSON.stringify(users,null,2));




