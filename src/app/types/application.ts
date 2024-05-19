export type Application = {
  id: number;
  createdAt: string;
  status: "accepted" | "rejected" | "pending";
  name: string;
  email: string;
  motivation: string;
  summary: string;
};