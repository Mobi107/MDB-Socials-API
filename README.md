# meme-api
Meme API for Training Program

## Architecture
- bin: any scripts/background jobs you want to run at a certain time interval or real time
- logic: each file pertains to a specific node in your firebase database, logic is specific to that object (i.e. cat.js represents all db operations on a cat node)
- routers: each file pertains to a specific node in your firebase database, routing is specific to how you want client devices to interact with your database (i.e. /cats gets all cat objects)
- util: util files that assist with logic file operations (i.e. database wrapper methods you might need)

## How to run
Make sure you have latest version of node installed
1. clone repo
2. npm install
3. get .env file from krishnan
4. source .env
5. node index.js
