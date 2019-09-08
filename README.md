Just floating faces :)

## Available Scripts

In the project directory, you can run:
#### `npm start` - to run react app
#### `npm run build`- to make react prod build

### In this project is Node.js server
You can find it in folder **{rootFolder}/server**

#### Why I need it? 
To make data available for all devices.

To run Node.js server run:
#### `node server.js`

### What you need to change to make it work for you?
Set a proper base URL in `Api.tsx`. Because it is just hard coded. Basically react app and node.js server runs in your local network. But to test this app in your phone (for example), you need to set IP of your local network in the base url in `Api.tsx`.

## Preview:
![preview](https://i.imgur.com/UNLHUAd.png)
