const mailgun = require("mailgun-js");


exports.contact = (req,res) => {
    const {name,email,message} = req.body

    const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

    const data = {
        from: ` ${name} <${email}>`,
        to: process.env.AUTHOR_EMAIL,
        subject: `'Customer Enquiries - EVERLY'`,
        text: `Email received from ${name} \n Sender name: ${name} \n Sender email: ${email} \n \n Sender message: ${message} `
        };

    mg.messages().send(data, (error, body) => {
        if(error){
            console.log(error)
            return res.status(400).json({
                error: error
            })
        } else {
            console.log(body)
            res.json({
                success: true
            })
        }
    });
}





/*const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


exports.contact = (req, res) => {
    const {name,email,message} = req.body

    const msg = {
      to: "ducp1605@gmail.com",
      from: 'ducp1605@gmail.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

   sgMail
      .send(msg)
      .then(() => {}, error => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body)
        }
      });

};*/