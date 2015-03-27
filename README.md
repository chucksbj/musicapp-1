# musicapp

## Create method
```
yo angular-fullstack mussicapp
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

```
yo angular-fillstack:heroku
cd dist
git push heroku master

# View on heroku cloud by
heroku open
```
