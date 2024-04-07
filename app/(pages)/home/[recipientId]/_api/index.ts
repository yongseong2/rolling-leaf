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

interface RecipientNameResponse {
  recipientName: string;
}

export const getLeafs = async (recipientId: string): Promise<LeafResponse> => {
  const res = await http.get(`/api/leaf?recipientId=${recipientId}`);
  return res.data;
};

export const getRecipientName = async (
  recipientId: string,
): Promise<RecipientNameResponse> => {
  const res = await http.get(`/api/recipient?recipientId=${recipientId}`);
  return res.data;
};
