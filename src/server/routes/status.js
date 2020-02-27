const router = require('express').Router();

const { status } = require('../../services/local/os');

// uptime middleware (store uptime to res.locals)
function uptime(req, res, next) {
  res.locals.uptime = status.getUptimeMessage();
  next();
}

// freemem middleware (store freemem to res.locals)
function freemem(req, res, next) {
  res.locals.freemem = status.getFreeMemMessage();
  next();
}

// response middleware (send res.locals as respose)
function sendStatus(req, res) {
  res.json(res.locals);
}

// get freemem and uptime
router.get('/', freemem, uptime, sendStatus);
// get uptime only
router.get('/uptime', uptime, sendStatus);
// get freemem only
router.get('/freemem', freemem, sendStatus);

module.exports = router;
