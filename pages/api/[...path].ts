// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise(() => {
    // convert cookies to header Authorization
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("access_token");
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    // don't send cookies to API server
    req.headers.cookie = "";

    proxy.web(req, res, {
      target: "http://localhost:4000",
      changeOrigin: true,
      selfHandleResponse: false,
    });
  });
}
