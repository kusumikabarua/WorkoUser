# WorkoUser
Nodejs project for creating,updating and listing users
# Nodejs User Management

Nodejs User Management is an appication to help administrators manage user identities including password resets, creating and provisioning, blocking and deleting users.



# key features !

* Written in JavaScript
* Permission based access control
* Stateless ( JWT )

   

* User

  - Get All Users  
  - Get User By ID 
  - Add New User 
  - Edit User 
  - Delete User ( Soft Delete )
  - Login As User 
  

### Tech

Node-UM uses a number of open source projects to work properly:
* [node.js](https://nodejs.org)
* [Express](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com) 
* [Mongoose](https://mongoosejs.com)
* [Joi](https://github.com/hapijs/joi)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)






### Installation

Node-UM requires [node.js](https://nodejs.org),  [Typescript](https://www.typescriptlang.org), [Mongodb](https://www.mongodb.com)

Install the dependencies and devDependencies and import DB Collections from DB folder.
then run the below script to start the server.

```sh
$ npm install
$ npm start
```


### Environment

You can change env variables from **.env** file 

| Variable | Description |
| ------ | ------ |
| PORT | HTTP Server Port |
| MONGODB_URI | Mongodb URL |
| JWT_SECRET | JWT Secret for Token Generation & Verification|



### API
-----------


> For all requests ( URL & JSON body ) 



 **Authentication** 


Client ->> Server: send login request
Server ->> Client: return access & refresh token


// all subsequents requests 

Client ->> Server: send access token in Authorization header
Server ->> Client: return response






```




 **Authorization** 




 # To be continued .......
 
