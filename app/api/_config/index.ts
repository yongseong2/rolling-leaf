import { NextApiRequest, NextApiResponse } from "next";

export type APIRequest = Request & NextApiRequest;
export type APIResponse = Response & NextApiResponse;

export async function readRequestBody(
  request: NextApiRequest,
): Promise<string> {
  const chunks = [];
  for await (const chunk of request.body) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
}
