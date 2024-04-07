import { APIRequest, readRequestBody } from "../_config";
import { createLeaf, getLeavesByRecipientId } from "@/lib/services/leaf";
import { getToken } from "next-auth/jwt";

export async function POST(req: APIRequest) {
  const session = await getToken({ req });
  const url = new URL(req.url);
  const recipientId = url.searchParams.get("recipientId");

  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!recipientId) {
    return new Response(
      JSON.stringify({ message: "Recipient Id is required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
  const authorId = session.id as string;

  const body = await readRequestBody(req);
  const { title, content, isAnonymous, leafType } = JSON.parse(body);

  try {
    await createLeaf({
      title,
      content,
      isAnonymous,
      leafType,
      authorId,
      recipientId,
    });
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

    const leaves = await getLeavesByRecipientId(recipientId);
    const leavesFormatted = leaves.map(leaf => ({
      id: leaf.id,
      title: leaf.title,
      content: leaf.content,
      isAnonymous: leaf.isAnonymous,
      leafType: leaf.leafType,
      authorName: leaf.user.name,
    }));

    return new Response(
      JSON.stringify({
        leaves: leavesFormatted,
        counts: leavesFormatted.length,
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
