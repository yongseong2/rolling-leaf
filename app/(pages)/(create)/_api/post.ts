import { http } from "@/app/_axios";
import { LeafsType } from "../../_types";

export interface LeafRequestType {
  title: string;
  content: string;
  isAnonymous: boolean;
  leafType: LeafsType;
}
export async function createLeaf(leafForm: LeafRequestType) {
  const res = await http.post("/api/leaf", leafForm);
  return res.data;
}
