# musicapp

## Create method
```
yo angular-fullstack mussicapp
yo angular-fullstack:endpoint song
yo angular-fullstack:route song
```

## Build

Dev build
```
grunt build
```

Launch local prod build
```
grunt serve:dist
```

Heroku cloud installs
* Signup for a free account
* First install heroku toolbelt
** see https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
* Add the mongo database - sandbox

```
heroku addons:add mongolab
```

Heroku build and deploy
Note: After executing the commands below
the dist folder now points to the heroku git repository

```
yo angular-fillstack:heroku
cd dist
git push heroku master

# View on heroku cloud by
heroku open
```
See https://lw-mussicapp.heroku.com/
and https://lw-musicapp.heroku.com/song
