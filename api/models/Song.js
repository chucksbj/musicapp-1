/**
* Song.js
*
* @description :: Song information storage
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	song_id:{
      type:"integer",
      required:true,
      unique:true
    },
  	title:{
      type:"string", 
      required:true,
      minLength:2
    },
    start_key:{
      type:"string",
      required:true,
      minLength:1,
      maxLength:1
    },
   	aux_key:{
      type:"string", 
      required:false
    },
    words:{
      type:"string", 
      required:false
    },

  }
};

