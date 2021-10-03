# Rest Example

A Rest API example using Node, MongoDB, and React.

## Requirements

1. Node.js
2. npm
3. MongoDB

## Step 1: Clone the project

```sh
git clone https://github.com/melchord/rest-example
cd rest-example/
```

## Step 2: Install NPM dependencies

```sh
npm i
cd server/
npm i
```

### Step 3: Run MongoDB

```sh
mongod
```

### Step 4: In a Seperate terminal, run the server

```sh
cd server/
npx nodemon server
```

### Step 5: In a Seperate terminal, run the react application

```sh
npm start
```

This starts up the local website on http://localhost:3000. Track the list of users on http://locahost:4000/users
