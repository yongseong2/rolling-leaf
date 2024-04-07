import prisma from "@/lib/prisma";

export interface CreateLeafType {
  title: string;
  content: string;
  isAnonymous: boolean;
  leafType: string;
  authorId: string;
  recipientId: string;
}

export async function createLeaf({
  title,
  content,
  isAnonymous,
  leafType,
  authorId,
  recipientId,
}: CreateLeafType) {
  return await prisma.leaf.create({
    data: {
      title: title,
      content: content,
      isAnonymous: isAnonymous,
      leafType: leafType,
      authorId: authorId,
      recipientId: recipientId,
    },
  });
}

export async function getLeavesByRecipientId(recipientId: string) {
  return await prisma.leaf.findMany({
    where: {
      recipientId: recipientId,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
}
