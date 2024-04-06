import { NextApiRequest } from "next";

export async function readRequestBody(
  request: NextApiRequest,
): Promise<string> {
  const chunks = [];
  for await (const chunk of request.body) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
}
