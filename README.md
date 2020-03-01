# [Express](https://expressjs.com) app example ([Node.js](https://nodejs.org))

## How to use:
- clone this repo

  `git clone https://github.com/XX-NF-XX/express-example.git`
- install dependencies

  `npm i`
- run

  `npm start`
- open via browser or any other tool like curl or Postman

  http://localhost:3000
  
## List of endpoints:
- `/` - List of available endpoints
- `/status` - uptime and freemem
- `/status/uptime` - uptime only
- `/status/freemem` - freemem only
- `/env` - List of all env variables (Might be a long list!)
- `/env/:VAR_NAME` - show a single env variable (try `/env/HOME` or `/env/PWD` or `/env/AAA`)
- `/error/throw` - throw an error
- `/error/throw-async` - hrow an async error
- `/error/call-next` - call next function with an error
