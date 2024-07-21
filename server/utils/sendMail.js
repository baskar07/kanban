const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const sendMail = async options =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        auth:{
            user:"rbaskarkava@gmail.com",
            pass:"prga tpsb puqq cnce"
        }
    });

    const templatePath = path.join(__dirname,'..', 'views', 'verifyEmail.hbs');
    const source = fs.readFileSync(templatePath, 'utf8');
    const template = handlebars.compile(source);
    const html = template({
        email: options.email,
        subject: options.subject,
        verificationUrl : options.verificationUrl
    });
    const mailOptions = {
        from: '',
        to:options.email,
        subject: options.subject,
        html
    };

    await transporter.sendMail(mailOptions);
}


module.exports = sendMail;