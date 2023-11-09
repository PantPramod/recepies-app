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
            html: `<a href="https://recepies-bl3673mcr-pantpramod.vercel.app/verifyemail?token=${token}">Veriy Email Address</a>`,
        });

        console.log("Message sent: %s", info.messageId);

    } catch (err) {
        console.log(err)
    }

}

export default sendMail