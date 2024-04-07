import { http } from "@/app/_axios";
import { LeafsType } from "../../_types";

export interface LeafRequestType {
  title: string;
  content: string;
  isAnonymous: boolean;
  leafType: LeafsType;
}
export async function createLeaf(
  recipientId: string,
  leafForm: LeafRequestType,
) {
  const res = await http.post(`/api/leaf?recipientId=${recipientId}`, leafForm);
  return res.data;
}
