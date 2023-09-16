const nodemailer = require("nodemailer");

export async function sendMail(subject, toEmail, otpText) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: toEmail,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
