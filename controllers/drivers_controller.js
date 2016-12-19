const Driver = require('../models/driver');

module.exports = {
  greeting(req, res) {
    res.send({ hello: 'world' })
  },

  create(req, res) {
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver));
  }
};
