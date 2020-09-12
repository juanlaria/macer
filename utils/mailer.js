const nodemailer = require('nodemailer');
var fs = require('fs');

let transporter = nodemailer.createTransport({
  host: 'c1550256.ferozo.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'test@dorronsoro.com.ar', // generated ethereal user
    pass: 'Coliflor7', // generated ethereal password
  },
});

const send = form => {
  const file = form.find(field => field.type === 'file');
  const text = form
    .map(field => {
      if (field.type !== 'file') {
        return `${field.label}: ${field.value}`;
      }
    })
    .join('\r\n');

  // const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const from = `${'Dorronsoro'} <${'test@dorronsoro.com.ar'}>`;
  // const message = {
  //   from,
  //   to: 'kevin@thecouch.nyc',
  //   subject: `New message from ${from}`,
  //   text,
  //   replyTo: from,
  // };
  const message = {
    from,
    to: 'juan.laria@gmail.com',
    subject: `New message from ${from}`,
    text,
    attachments: file && [
      {
        filename: file.value.filename,
        content: fs.createReadStream(file.value.path),
      },
    ],
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;
