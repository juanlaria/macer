const mailer = require('../../utils/mailer');

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb',
    },
  },
};

export default (req, res) => {
  mailer(req.body)
    .then(() => {
      res.status(200);
      res.send('success');
    })
    .catch(error => {
      res.status(500);
      res.send('error');
    });
};
