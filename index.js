
import nodemailer from "nodemailer";



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "emailAddress",
        pass: 'gmailPassword'
    }
})

const mailOptions = {
    from: 'expample@gmail.com',
    to: 'example2@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer.'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
