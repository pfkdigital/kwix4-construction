import type { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../../services/email.service";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        console.log("hi")
        const { firstName, lastName, email, message } = req.body;
        await sendMail(`You have an email from ${firstName} ${lastName}`, email, message);
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
