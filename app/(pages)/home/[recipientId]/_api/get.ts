import { http } from "@/app/_axios";
import { LeafsType } from "../../../_types";

interface LeafResponse {
  leaves: {
    id: string;
    title: string;
    userName: string;
    content: string;
    leafType: LeafsType;
  }[];
  counts: number;
}

export const getLeafs = async (recipientId: string): Promise<LeafResponse> => {
  const res = await http.get(`/api/leaf?recipientId=${recipientId}`);
  return res.data;
};
