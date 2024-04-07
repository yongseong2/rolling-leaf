import prisma from "../prisma";

export async function getRecipientNameById(
  recipientId: string,
): Promise<string | null> {
  const recipient = await prisma.user.findUnique({
    where: {
      id: recipientId,
    },
    select: {
      name: true,
    },
  });

  return recipient?.name ?? null;
}
