import { getRecipientNameById } from "@/lib/services/recipient";
import { APIRequest } from "../_config";

export async function GET(req: APIRequest) {
  try {
    const url = new URL(req.url);
    const recipientId = url.searchParams.get("recipientId");

    if (!recipientId) {
      return new Response(
        JSON.stringify({ message: "Recipient Id is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const recipientName = await getRecipientNameById(recipientId);

    return new Response(
      JSON.stringify({
        recipientName,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
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
