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
  let emailsList = form.find(field => field.type === 'emailsList');
  emailsList = emailsList && emailsList.value;

  let emailSubject = form.find(field => field.type === 'emailSubject');
  emailSubject = emailSubject && emailSubject.value;

  const file = form.find(field => field.type === 'file');

  let email = form.find(field => field.type === 'Email');
  email = email && email.value;

  let name = form.find(field => field.label === 'Nombre');
  name = name && name.value;

  const text = form
    .map(element => {
      if (element.label && element.type !== 'file') {
        return `${element.label}: ${element.value}`;
      }
    })
    .join('\r\n');

  // const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const from = `${name || 'Macer'} <${email || 'contacto@macerstore.com/'}>`;
  // const message = {
  //   from,
  //   to: 'kevin@thecouch.nyc',
  //   subject: `New message from ${from}`,
  //   text,
  //   replyTo: from,
  // };
  const message = {
    from,
    to: emailsList,
    subject: emailSubject || `Nuevo mensaje de ${from}`,
    text,
    // attachments: file && [
    //   {
    //     filename: file.value.filename,
    //     content: fs.createReadStream(file.value.path),
    //   },
    // ],
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;
