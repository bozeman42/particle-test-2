const router = require('express').Router();

const Particle = require('particle-api-js');
const particle = new Particle();
const particleAuth = require('../modules/token');

router.get('/',(req,res) => {
  particle.listDevices({auth: particleAuth.token})
  .then(devices => res.send(devices))
  .catch(err => res.status(500).send(err));
})

router.get('/reading',(req,res) => {
  particle.getVariable({
    deviceId: particleAuth.deviceId,
    name: 'sensor',
    auth: particleAuth.token
  })
  .then(result => {
    res.send({
      value: result.body.result
    })
  })
  .catch(err => {
    res.sendStatus(500);
  })
})

particle.getVariable({
  deviceId: particleAuth.deviceId,
  name: 'sensor',
  auth: particleAuth.token
})
.then(result => {
  console.log(result.body.result)
})
module.exports = router;