/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 	create: function (req, res) {

 		let firstName = req.param('firstName'),
 		lastName = req.param('lastName'),
 		pseudo = req.param('pseudo');
 		email = req.param('email');
 		password = req.param('password');
 		confirmpassword = req.param('confirmpassword');
 		age = req.param('age');

    console.log("firstname");
 		if(!firstName){
 			return res.badRequest({err:'Invalid firstName'});
 		}

    console.log("lastname");
 		if(!lastName){
 			return res.badRequest({err:'Invalid lastName'});
 		}

    console.log("pseudo");
 		if(!pseudo){
 			return res.badRequest({err:'Invalid pseudo'});
 		}

    console.log("email");
 		if(!email){
 			return res.badRequest({err:'Invalid email'});
 		}

    console.log("password");
 		if(!password){
 			return res.badRequest({err:'Invalid password'});
 		}

    console.log("confirmpassword");
 		if(!confirmpassword){
 			return res.badRequest({err:'Invalid confirmpassword'});
 		}

    console.log("age");
 		if(!age){
 			return res.badRequest({err:'Invalid age'});
 		}

 		User.create({
 			firstName: firstName,
 			lastName : lastName,
 			pseudo : pseudo,
 			email : email,
 			password : password,
 			confirmpassword : confirmpassword,
 			age:age

 		})
 		.then(_user => {
      console.log("user");
 			if(!_user) return res.serverError({err:'Unable to create user'});
      console.log("registered user");
       return res.ok(_user); //to learn more about responses check api/responses folder
   })
 		.catch(err => res.serverError(err.message));
 	}
 };
