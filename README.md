# Vapor
Vapor is a e-commerce application focused mainly on the video game industry. It is a product page where each product can be rendered to the page based on product id. The main focus here was the information service, giving the customer information about the product they were interested in. Below are a few helpful setions to help jumping into the project a little easier.

## Tech Used
- Express
- PostgreSQL
- Cassandra
- AWS EC2
- AWS S3
- New Relic
- k6
- loader.io

## Startup Instructions

If first time runing this program please follw the instructions below to start application properly.

In you terminal in the root folder run the following scripts:

- Run script "npm install" to install dependencies

- Run script "npm run dataGenGame"

- Run script "npm run seedPSQL" to seed the database

- Run script "npm start" to start server

In seperate terminal window, cd into client folder and run the following scripts:

- Run script "npm install" to install dependencies

- Run script "npm run build" to build webpack bundle

Go to http://localhost:3000 in your browser to see the app.

Access different products but adding query params like so:

- http://localhost:3000/?id=85


## CRUD Operations:


- Create | POST: '/moist-air/'
  - Games can be created and added to the database. Game information that is included in the body will be added to the new document.

- Read | GET: '/moist-air/'
  - Get all games in the database.

- Read | GET: '/moist-air/game'
  - Uses query parameters to find games based on 'id'.
    - 'id' is not the object _id, but an id given in the original data generation script

- Update | PUT: '/moist-air/game'
  - Updates one game
  - Uses query parameters to find games based on 'id'.
    - 'id' is not the object _id, but an id given in the original data generation script
  - Currently updates the price of the game. Can be expanded to many other peramteres for update

- Delete | DELETE: '/moist-air/game'
  - Deletes one game
  - Finds game to be deleted by referencing query perameters
  - Looks for the id of the game and then deletes that one document using deleteOne
    - 'id' is not the object _id, but an id given in the original data generation script
    
 ## Module Frontend
 ![img](https://i.imgur.com/Q7lglyH.png)
 
 ## Stress Test Results
 
 Service stress results using New Relic: 
 ![img](https://i.imgur.com/3ak0kJu.png)
