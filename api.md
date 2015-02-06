# Musicapp REST Api and HTML5 web application

A demo application to store, view, and update songs


## This application supports two REST enabled data entities:

```
1. user
2. song
```

### With each of these entities you can do operations:

```
find
create
update
destroy
```


## Add user record

```
Example:

http://localhost:1337/user/create?user_id=1&name=Fred&email=fred@test.com
http://localhost:1337/user/create?user_id=2&name=Ned&email=ned@test.com
```

## Get user 

```
All Users:
http://localhost:1337/user

Get User 1:
http://localhost:1337/user/1

Result:
{
  "user_id": 1,
  "name": "Fred",
  "email": "fred@test.com",
  "createdAt": "2015-01-28T03:42:08.457Z",
  "updatedAt": "2015-01-28T03:42:08.457Z",
  "id": 1
}
```




