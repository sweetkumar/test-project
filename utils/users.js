const fs = require('fs');

var getUsersArray = () => {
	try{
		var userStr = fs.readFileSync('data.json');
		return JSON.parse(userStr);
	}
	catch(e){
		return [];
	}
};

var pushUsersArray = (newUser) => {
	
	
	if(typeof newUser.name !== "undefined"){
		var users = getUsersArray();
		var noDuplicateUsers = users.filter((user) => user.name ===newUser.name);
		if (noDuplicateUsers.length === 0){
		users.push(newUser);
		fs.writeFile('data.json', JSON.stringify(users,null,3),(err) =>  {
				if(err){
					console.log(err);
				}
			});
		}
	}

};

module.exports = {
	getUsersArray,
	pushUsersArray
}