import type {NextApiRequest, NextApiResponse} from "next";
import {sendMail} from "@/services/email.service";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {method} = req;
        switch (method) {
            case "POST": {
                const {firstName, lastName, email, message, number} = req.body;
                const currentMessage = `Hi, Bless \n \n you have a message from ${firstName} ${lastName}. \n \n Email Address: ${email} \n \n Mobile Number: ${number} \n \n Message: \n \n ${message} `
                await sendMail(`You have an email from ${firstName} ${lastName}`, email, currentMessage);
                res.status(200).send("Success");
                break;
            }
            case "GET": {
                break;
            }
            default:
                res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
                res.status(405).end(`Method ${method} Not Allowed`);
                break;
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export default handler;
