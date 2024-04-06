import { upsertUser } from "@/lib/services/auth";
import type { NextApiRequest } from "next";
import { readRequestBody } from "../_config";

export async function POST(req: NextApiRequest) {
  console.log(req);
  const body = await readRequestBody(req);
  const { userId, userName, userImage } = JSON.parse(body);
  try {
    await upsertUser(userId, userName, userImage);
    return new Response(JSON.stringify({ message: "success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch data",
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
