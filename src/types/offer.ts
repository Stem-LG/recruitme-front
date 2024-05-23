export type offer = {
  id: number;
  title: string;
  company: string;
  description: string;
  skills: string;
  createdAt: Date;
};

export type miniOffer = {
  id: number;
  title: string;
  createdAt: Date;
}