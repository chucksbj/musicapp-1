/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#/documentation/concepts/ORM
 */

module.exports.models = {

  connection: 'Mongodb',

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  // connection: 'localDiskDb',

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * 1. safe  - never auto-migrate my database(s). I will do it myself.       *
  * 2. alter - auto-migrate, but attempt to keep my existing data.           *
  * 3. drop  - wipe/drop ALL my data and rebuild models every time I lift    *                                                                        *
  ***************************************************************************/
  migrate: 'safe'

};
