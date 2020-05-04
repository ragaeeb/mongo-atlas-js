This project is following the course entitled [NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)](https://www.udemy.com/course/nodejs-the-complete-guide) by `Maximilian Schwarzmüller`.

It also uses concepts from the course entitled [Using MongoDB with Node.js](https://app.pluralsight.com/library/courses/mongodb-nodejs/table-of-contents) by `Jonathan Mills`.

# Instructions

1. Go to https://cloud.mongodb.com
2. Create a cluster, make sure you are on the FREE Tier (M0).
3. Under `Security` -> `Database Access`, create one user which has `Read and Write Access to Any Database`. Make sure you note down the username and password you created.
4. Under `Network Access` -> `IP Whitelist`, click `Add IP Address` and then `Add Current IP Address`.
5. Go to `Data Storage` -> `Clusters`, and click the `Connect` button, and then choose `Connect Your Application`.
6. mongodb+srv://test-user:<password>@cluster0-asbacd.mongodb.net/test?retryWrites=true&w=majority

## Create a .env file with the following information:

```
ATLAS_LOGIN_URL=mongodb+srv://testuser:123456@cluster0-1234.mongodb.net/dbname?retryWrites=true&w=majority
```
