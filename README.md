# Jupiter Assignment

> Features

```
1. Authentication both Registering and Logging in a user.
2. Encryption and bearer token methodology.
3. Once logged in, app will automatically log you back in when you visit the app again.
4. Clean UI, built using Materialize css.
```

Also, few things to watch out,
Although it doesn't happen, but if after login or sign up, the homescreen doesnot load, wait for 5-10sec or refresh the screen.

> Installation Steps for local setup

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

```bash
NODE_ENV=production node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)

## App Info

### Author

Siddhant S

### Version

2.0.0

### License

This project is licensed under the MIT License
