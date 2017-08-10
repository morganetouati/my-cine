/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:"users",

  attributes: {
	id:{
		type: 'number',
		required: true
	},
	firstName:{
		type: 'string',
		required: true
	},
	lastName:{
		type: 'string',
		required: true
	},
	pseudo:{
		type: 'string',
		required: true
	},
	email:{
		type: 'string',
		required: true
	},
	password:{
		type:'string',
		required: true
	},
	confirmpassword:{
		type: 'string',
		required: true
	},
	age:{
		type: 'string',
		required: true
	}
  }
}