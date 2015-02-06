/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	user_id:{
      type:"integer",
      required:true,
      unique: true
    },
  	name:{
      type:"string", 
      required:true,
      minLength: 2
    },
    email:{
      type:"string",
      required:true,
      unique: true
    }

  }
};

