import type { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../../services/email.service";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;

    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          "TEST",
          "nuh_mali@hotmail.co.uk",
          "THIS is a test"
        );
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
