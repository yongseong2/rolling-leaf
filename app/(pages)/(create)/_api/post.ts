import { LeafsType } from "../../_types";

export interface LeafRequestType {
  title: string;
  content: string;
  isAnonymous: boolean;
  leafType: LeafsType;
}
