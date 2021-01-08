const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('backend works');
});

router.get('/getStuff', (req, res, next) => {
  res.json({msg: 'GET works'});
});

router.post('/postStuff', (req, res, next) => {
  console.log(req.body);
  res.json({msg: 'POST works'});
});

module.exports = router;
