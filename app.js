const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');
const hbs = require('hbs');

const fs = require('fs');

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');


var getUsersArray = () => {
	try{
		var userStr = fs.readFileSync('data.json');
		return JSON.parse(userStr);
	}
	catch(e){
		return [];
	}
};

/*var isEmpty = (obj)  => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}*/

var pushUsersArray = (user) => {
	
	
	if(typeof user.name !== "undefined"){
		var users = getUsersArray();
		users.push(user);
		fs.writeFile('data.json', JSON.stringify(users,null,3),(err) =>  {
				if(err){
					console.log(err);
				}
			});
		}

};






/*app.use('/', (req,res,next) => {
	next();
});
*/

app.get('/', (req,res) => {
	var name = req.query.fname;
	var email = req.query.email;
	var collegeID = req.query.cid;
	var rollNO = req.query.roll;

	var user = {
		name,
		email,
		collegeID,
		rollNO
	}
	pushUsersArray(user);
	
	/*console.log(user);*/
	
	res.render('index.hbs');
});

app.listen(PORT, () => {
	console.log(`Server listening for requests at ${PORT}`);
});