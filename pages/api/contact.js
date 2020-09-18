const mailer = require('../../utils/mailer');

export default (req, res) => {
  mailer(req.body)
    .then(() => {
      console.log('SUCCESS!');
      res.send('success');
    })
    .catch(error => {
      console.log('FAILED!', error);
      res.send('badddd');
    });
};
