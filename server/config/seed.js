/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Instrument = require('../api/instrument/instrument.model');

Thing.find({}).remove(function() {
  Thing.create( //{
/*    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators' */
  //}
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'chucksbj',
    email: 'chucksbj@gmail.com',
    password: 'engines1'
  },function() {
      console.log('finished populating users');
    }
  );
});

Instrument.find({}).remove(function() {
  Instrument.create({
        "name": "French Horn 2",
        "_id": "55481854fee2aa480a426fda",
        "__v": 0
    },
    {
        "name": "Piano",
        "_id": "554819effee2aa480a426fdc",
        "__v": 0
    },
    {
        "name": "Saxophone",
        "_id": "554819fcfee2aa480a426fde",
        "__v": 0
    },
    {
        "name": "Tennor Sax",
        "_id": "554819fefee2aa480a426fdf",
        "__v": 0
    },
    {
        "__v": 0,
        "_id": "55481a01fee2aa480a426fe0",
        "name": "Violin"
    },
    {
        "name": "Flute",
        "_id": "55481a07fee2aa480a426fe1",
        "__v": 0
    },
    {
        "name": "Bass",
        "_id": "55481a16fee2aa480a426fe2",
        "__v": 0
    },
    {
        "name": "Trombone 1",
        "_id": "55481a1bfee2aa480a426fe3",
        "__v": 0
    },
    {
        "name": "Trombone 2",
        "_id": "55481a1dfee2aa480a426fe4",
        "__v": 0
    },
    {
        "name": "Trombone 3",
        "_id": "55481a21fee2aa480a426fe5",
        "__v": 0
    },
    {
        "name": "Trumpet 1",
        "_id": "55481a25fee2aa480a426fe6",
        "__v": 0
    },
    {
        "name": "Trumpet 2",
        "_id": "55481a28fee2aa480a426fe7",
        "__v": 0
    },
    {
        "__v": 0,
        "_id": "5557b9ded079a9a91dde271a",
        "name": "French Horn 3"
    },
    {
        "name": "French Horn 1",
        "_id": "5572673f7ec45a40667e106a",
        "__v": 0
    },
    {
        "name": "Clarinet",
        "_id": "557ba15281015137551989af",
        "__v": 0
    },
    {
        "name": "Guitar",
        "_id": "557ba16881015137551989b0",
        "__v": 0
    },
    function() {
      console.log('finished populating instruments');
    }
  );
});