export type application = {
  id: number;
  createdAt: Date;
  offerTitle: string;
  status: "accepted" | "rejected" | "pending";
  name: string;
  email: string;
  motivation: string;
  resumeSummary: string;
};


export type miniApplication = {
  id: number;
  name: string;
  status: "accepted" | "rejected" | "pending";
  createdAt: Date;
}