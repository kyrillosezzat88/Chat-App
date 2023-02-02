# Chat App

##### Chat App is a Full Featured Chat application it`s built in React, StreamChat and Node js

[![Build Status](https://i.postimg.cc/7Yb8ZP9b/logo-color.png)](https://travis-ci.org/joemccann/dillinger)

## Screenshots

![Alt text](https://i.postimg.cc/C1KJs5zq/chat.png "Group chat Page")
![Alt text](https://i.postimg.cc/Vsxpm9JZ/chat2.png "Signup Page")
![Alt text](https://i.postimg.cc/gkKDQ38Z/chat3.png "Login Page")

## Features

- Authantication login and signup
- Create Groups and add members to chat with
- Edit Groups (change Name and add memebers)
- Direct Message to any memeber
- React on messages
- Edit , Delete , React and Replay on messages (Thanks to StreamChat :D )
- open thread
- send images , videos , links , gif and more....
- search channels and memebers

## Tech Front-End

- [ReactJS](https://reactjs.org/)
- [StreamChat](https://getstream.io/)
- [StreamChat React](https://www.npmjs.com/package/stream-chat-react)
- [universalCookie](https://www.npmjs.com/package/universal-cookie)
- [Axios](https://www.npmjs.com/package/axios)

## Tech Back-End

- [Node](https://nodejs.org/en/)
- [express](https://www.npmjs.com/package/express)
- [StreamChat](https://getstream.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [crypto](https://www.npmjs.com/package/crypto)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [twilio](https://www.npmjs.com/package/twilio)

## Installation-Frontend

Chat App requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
cd app-folder
npm install
npm start
```

For Generate Build folder:

```sh
npm run build
```

## Installation-Backend

1-requires [Node.js](https://nodejs.org/) to run.

2-Create .env file in route dir and add

```bash
STREAM_APP_ID = your Stream id
STREAM_API_SECRET = your stream api secret
STREAM_API_KEY = stream api
TWILIO_ACCOUNT_SID = your twillio acount sid
TWILIO_AUTH_TOKEN = your twilio auth token
TWILIO_MESSAGING_SERVICE_ID = your twillio messaging id

```

3-Install the dependencies and devDependencies and start the server.

```sh
cd server-app-folder
npm install
npm start
```

## License

MIT
