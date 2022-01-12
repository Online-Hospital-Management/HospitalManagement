const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
        auth: {
            api_key: '7d8d676f904fe656fd52c7b2114700fb-76f111c4-902172c0',
            domain: 'sandbox410dbaa95a754239bf051e2eb0945ecc.mailgun.org'
        }
    };

    const transporter = nodemailer.createTransport(mailGun(auth));

    const sendMail = (name, email, subject, text, cb) => {
        const mailOptions = {
            sender: name,
            from: email,
            to: 'pirvuletu.cristian13@gmail.com',
            subject: subject,
            text: text
        };
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, data);
            }
        });
    }
    
    // Exporting the sendmail
    module.exports = sendMail;