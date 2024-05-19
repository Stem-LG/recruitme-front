"use server"

import { getApplications } from "./getApplications";

export async function getApplication(id: number) {
  const applications = await getApplications();

  return applications.find((application) => application.id == id);
}
