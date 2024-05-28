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
  const { accessToken } = await getAccessToken(req, res);

  res.setHeader("Set-Cookie", `accessToken=${accessToken}; path=/;`);
  res.status(200).json({ message: "we have token", accessToken: accessToken });
}