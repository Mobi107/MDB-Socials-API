# meme-api
Meme API for Training Program

## Architecture
- bin: any scripts/background jobs you want to run at a certain time interval or real time
- logic: each file pertains to a specific node in your firebase database, logic is specific to that object (i.e. cat.js represents all db operations on a cat node)
- routers: each file pertains to a specific node in your firebase database, routing is specific to how you want client devices to interact with your database (i.e. /cats gets all cat objects)
- util: util files that assist with logic file operations (i.e. database wrapper methods you might need)

## How to create .env file
1. download service key json file from firebase console
2. make .env file as such:
```bash
export FIREBASE_PROJECT_ID="PUT PROJECT ID HERE"
export FIREBASE_CLIENT_EMAIL="PUT CLIENT EMAIL HERE"
export FIREBASE_PRIVATE_KEY="PUT PRIVATE KEY HERE"
export FIREBASE_DB_URL="https://<project id goes here>.firebaseio.com"
export FIREBASE_STORAGE_URL="<project id goes here>.appspot.com"
```

## How to setup firebase
1. create firebase account (sign in with google account)
2. create app on firebase console
3. activate facebook authenication
4. download service key json file
5. copy json fields over to .env file

## How to run locally
1. Make sure you have latest version of node installed
2. clone repo
3. npm install
4. source .env
5. node index.js

## How to run remotely (via Heroku)
1. create heroku account
2. create an app (Note: only payed dynos support 24/7 jobs so notifymeme wont work)
3. connect your github repo with auto deploys for master pushes
4. add environment variables (from .env file)
5. manually deploy
