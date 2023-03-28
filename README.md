# Todo-App - Nodejs-Express

# **Overview**

Simple Todo app to create crud operations connected with local Database (MongoDB) using mongoose. 

# **How to run the app**
**npm start** will run server.js script which launch the server and start Listening for requests on port '8000'.\
Url: http:/localhost:8000/todo
# **Todo Schema**
- Id 
- title
- status

# **Schema validations**
 - Id : must be number and unique.
 - title : must be string with min. length 3 char. and max 20 chars.
 - status : must be string between these values [todo - in-progress - done].

# **Project Apis**
1. Get all Todos
2. Get Todo using Id
3. Add Todo
4. Update Todo using Id
5. Delete Todo using Id

# **Document preview**
Mongo Compass ![compass](https://user-images.githubusercontent.com/83243320/224478990-285d3d02-bf2e-494f-af7b-960ed7111bd8.png)
---
# **Requests preview**
Add Todo![add-todo](https://user-images.githubusercontent.com/83243320/224479009-6530531b-1ed9-41c7-9158-41968b8bb5d3.png)
---
Get all Todos ![get-all-todos](https://user-images.githubusercontent.com/83243320/224479020-0b4bc8ff-6411-46d7-9ef0-723be99dafdd.png)
---
Get Todo using Id ![get-todo-by-id](https://user-images.githubusercontent.com/83243320/224479028-49eea848-c16c-4f45-9fea-951c4086d2c2.png)
---
Update Todo using Id ![update-by-id](https://user-images.githubusercontent.com/83243320/224479038-716a90c7-591c-4fbe-be75-e8d3e43ecb1e.png)
---
Delete Todo using Id ![delete-by-id](https://user-images.githubusercontent.com/83243320/224479683-02b943d6-974f-4d83-a0c8-bb7558d568ec.png)
---
# **Contributor Info.**
 Ahmed Nabil Sharawy \
Cloud Development Track - Intake 43\
ITI - Information Technology institute\
[LinkedIn](https://www.linkedin.com/in/ahmed-nabil-sharawy/)



