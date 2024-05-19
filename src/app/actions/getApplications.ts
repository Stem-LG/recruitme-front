"use server"

import { Application } from "@/app/types/application";

export async function getApplications(): Promise<Application[]> {
  // Fetch data from your API here.

  const offers: Application[] = [
    {
      id: 1,
      createdAt: "2022-01-01",
      status: "accepted",
      name: "John Doe",
      email: "some@example.com",
      motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      createdAt: "2022-01-01",
      status: "rejected",
      name: "John Doe",
      email: "louay@example.com",
      motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      createdAt: "2022-01-01",
      status: "pending",
      name: "John Doe",
      email: "yeye@example.com",
      motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return offers;
}

