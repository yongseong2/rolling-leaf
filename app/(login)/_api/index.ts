import { http } from "../../_axios";

export async function login(
  userId: string,
  userName: string,
  userImage: string,
) {
  const res = await http.post("/api/login", { userId, userName, userImage });
  return res.data;
}
