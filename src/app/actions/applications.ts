"use server";

import { application, miniApplication } from "@/types/application";
import { getAuth } from "./auth";
import { redirect } from "next/navigation";


export async function getOfferApplications(offerId: number): Promise<miniApplication[]> {

  const auth = await getAuth();

  const response = await fetch(`http://127.0.0.1:3000/offers/${offerId}/applications`, {
    headers: {
      Authorization: `Bearer ${auth?.raw}`
    },
    cache: "no-store"
  });

  const applications = await response.json();

  return applications;

}

export async function getApplication(applicationId: number): Promise<application> {

  const auth = await getAuth();

  const response = await fetch(`http://127.0.0.1:3000/applications/${applicationId}`, {
    headers: {
      Authorization: `Bearer ${auth?.raw}`
    },
    cache: "no-store"
  });

  const application = await response.json();


  return application;

}

export async function createApplication(formData: FormData) {

  const offerId = formData.get("offerId")

  const data = new FormData();
  data.append("name", formData.get("name") as string);
  data.append("email", formData.get("email") as string);
  data.append("resume", formData.get("resume") as Blob);
  data.append("motivation", formData.get("motivation") as string);


  const response = await fetch(`http://127.0.0.1:3000/offers/${offerId}/applications`, {
    method: "POST",
    body: data,
  })

  if (response.status === 200) {
    return redirect("/offers/" + offerId + "?status=success");
  }

  return false;

}


export async function updateApplication(formData: FormData): Promise<boolean> {

  const applicationId = formData.get("applicationId")
  const action = formData.get("action")

  const auth = await getAuth();

  const response = await fetch(`http://127.0.0.1:3000/applications/${applicationId}/${action}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${auth?.raw}`
    }
  });

  if (response.status === 200) {
    return redirect("?status=success");
  }

  return redirect("?status=failed");

}

