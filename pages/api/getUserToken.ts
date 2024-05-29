import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken } from "@auth0/nextjs-auth0";

type Data = {
  message: string;
  accessToken?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const secretEnv = process.env.AUTH0_SECRET;
  const audienceEnv = process.env.AUTH0_AUDIENCE;
  const baseUrl = process.env.AUTH0_ISSUER_BASE_URL;
  // const { accessToken } = await getAccessToken(req, res);
  const { accessToken } = await getAccessToken(req, res, {
    authorizationParams: {
      secret: secretEnv,
      audience: audienceEnv,
      scope: `openid name profile email ${baseUrl}/email ${baseUrl}/name`
    },
  });

  res.setHeader("Set-Cookie", `accessToken=${accessToken}; path=/;`);
  res.status(200).json({ message: "we have token", accessToken: accessToken });
}
