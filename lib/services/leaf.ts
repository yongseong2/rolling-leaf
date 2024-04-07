import prisma from "@/lib/prisma";

export interface CreateLeafType {
  title: string;
  content: string;
  isAnonymous: boolean;
  leafType: string;
  userId: string;
}

export async function createLeaf({
  title,
  content,
  isAnonymous,
  leafType,
  userId,
}: CreateLeafType) {
  return await prisma.leaf.create({
    data: {
      title: title,
      content: content,
      isAnonymous: isAnonymous,
      leafType: leafType,
      userId: userId,
    },
  });
}
