import prisma from "@/lib/prisma";

export async function upsertUser(
  userId: string,
  userName: string,
  userImage: string,
) {
  await prisma.user.upsert({
    where: { id: userId },
    update: { name: userName, image: userImage },
    create: { id: userId, name: userName, image: userImage },
  });
}
