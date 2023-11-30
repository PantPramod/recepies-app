import nodemailer from "nodemailer";

async function sendMail(sender, password, receiver, token) {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: sender,
                pass: password,
            },
            tls: {
                rejectUnauthorized: false
            }
        });


        let info = await transporter.sendMail({
            from: sender,
            to: receiver,
            subject: "Email Verification",
            text: `Send Email`,
            html: `<a href="https://recepies-app-theta.vercel.app/verifyemail?token=${token}">Click here to Veriy Email Address</a>`,
        });

        console.log("Message sent: %s", info.messageId);

    } catch (err) {
        console.log(err)
    }

}

export default sendMail