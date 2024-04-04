export interface ClientLeaf {
  id: string;
  x: number;
  y: number;
  title: string;
  content: string;
  type: LeafsType;
}

export type LeafsType =
  | "bg-leaf0"
  | "bg-leaf1"
  | "bg-leaf2"
  | "bg-leaf3"
  | "bg-leaf4"
  | "bg-leaf5"
  | "bg-leaf6"
  | "bg-leaf7"
  | "bg-leaf8"
  | "bg-leaf9"
  | "bg-leaf10"
  | "bg-leaf11"
  | "bg-leaf12";
