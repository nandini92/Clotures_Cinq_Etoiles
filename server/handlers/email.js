require('dotenv').config();
const router = require('express').Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
})

console.log(transporter);

transporter.verify((error, success) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Server is ready to take messages");
    }
});

router.post("/email", (req,res) => {
    console.log("New Email Received!\nDetails:", req.body);

    const name = req.body.fullName;
    const email = req.body.email;
    const message = req.body.message;

    const content = `name: ${name} \n email: ${email} \n message: ${message} `;
    const mail = {
        from: process.env.USER,
        to: process.env.USER,
        subject: `New message from ${name}/${email}`,
        text: content
    }

    transporter.sendMail(mail, (err,data) => {
        if(err){
            console.log(err);
            res.status(400).json({status: 400, data: req.body, message: "Email was not sent successfully"});
        } else {
            res.status(200).json({status: 200, data: req.body, message: "Email has been sent successfully"});
        }
    })
})

module.exports = router;