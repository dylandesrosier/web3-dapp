// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type AuthData = {
  address: string;
  message: string;
  signature: string;
};

type Data = {
  name: string;
};

const METHODS = ["POST"];
const CONTENT_TYPES = ["application/json", "application/x-www-form-urlencoded"];

/**
 * Generate auth token for users to log into the app.
 *
 * User flow:
 * - User connects wallet to app
 * - User signs message with wallet in App
 *  - "I agree to TOS. Log me in for 7 days." + unix timestamp
 * - Signature & message & salt are sent to server
 * - Server validates signature, generates auth token, stores auth token, returns auth token
 * - App saves auth token as cookie
 * - App uses auth token for other API requests
 *
 * @param req
 * @param res
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | undefined>
) {
  console.log(req.method);
  if (
    !req.method ||
    !req.headers["content-type"] ||
    !CONTENT_TYPES.includes(req.headers["content-type"])
  ) {
    res.status(400).json(undefined);
  } else if (!METHODS.includes(req.method)) {
    res.status(405).json(undefined);
  } else {
    const body: AuthData = req.body;

    res
      .status(200)
      .json({ name: "John Doe", body, ct: req.headers["content-type"] });
  }
}
