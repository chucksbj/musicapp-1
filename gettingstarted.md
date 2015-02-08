# Getting Started - Installs

1. Install node.js - http://nodejs.org/

2. Install sails.js globaly - http://sailsjs.org/#/
```
 sudo npm install sails@beta -g
```

3. Install bower globaly
```
sudo npm install bower -g
```

3. Install mongodb as a service - http://www.mongodb.org/

4. Write the application (see below)


# Created the application

1. Create the musicapp in a terminal window
```
	sails new musicapp
```

2. Install run-time scripts

```
	cd musicapp
	bower install
```

3. Build and run the application

```
	sails lift
```	

4. View the app in a browser
* http://localhost:1337


## Generated REST API websocket endpoints for entities
* user
* song


```
sails generate api user
sqils generate api song

```