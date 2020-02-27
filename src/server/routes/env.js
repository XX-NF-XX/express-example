const router = require('express').Router();

const env = require('../../services/local/env');

// Send value of env variable. /env/:ENV_VARIABLE like /env/HOME or /env/PWD or /env/AAA
router.get('/:env', (req, res) => {
  const name = req.params.env;
  const value = env.getEnv(name);

  if (value == null) {
    res.status(404).json({ error: `Env variable '${name}' is not defined` });
    return;
  }

  res.json({ [name]: value });
});

// Send list of all env variables (it might be a lot of data)
router.get('/', (req, res) => {
  res.json(env.getEnv());
});

module.exports = router;
