"use server"

import { redirect } from "next/navigation";
import { offer, miniOffer } from "../../types/offer";
import { getAuth } from "./auth";


export async function getOffers(): Promise<miniOffer[]> {

  const response = await fetch("http://127.0.0.1:3000/offers", {
    cache: "no-store"
  });

  const offers = await response.json();

  return offers;

}

export async function getOffer(offerId: number): Promise<offer> {

  const response = await fetch(`http://127.0.0.1:3000/offers/${offerId}`, {
    cache: "no-store"
  });

  const offer = await response.json();

  return offer;

}


export async function getRecruiterOffers(): Promise<miniOffer[]> {

  const auth = await getAuth();

  const response = await fetch(`http://127.0.0.1:3000/recruiter/offers`, {
    headers: {
      Authorization: `Bearer ${auth?.raw}`
    },
    cache: "no-store"
  });

  const offers = await response.json();

  return offers;

}


export async function createOffer(formData: FormData) {

  const auth = await getAuth();

  const res = await fetch("http://127.0.0.1:3000/offers", {
    method: "POST",
    body: JSON.stringify({
      title: formData.get("title"),
      company: formData.get("company"),
      skills: formData.get("skills"),
      description: formData.get("description")
    }),
    headers: {
      "Authorization": `Bearer ${auth?.raw}`,
      "Content-Type": "application/json",
    }
  })

  if (res.status === 200) {
    return redirect("/recruiter/offers?status=success");
  }

  return redirect("/recruiter/offers/add?status=failed");

}


export async function updateOffer(formData: FormData) {

  const auth = await getAuth();

  const offerId = formData.get("offerId")

  const res = await fetch(`http://127.0.0.1:3000/offers/${offerId}`, {
    method: "PUT",
    body: JSON.stringify({
      title: formData.get("title"),
      company: formData.get("company"),
      skills: formData.get("skills"),
      description: formData.get("description")
    }),
    headers: {
      "Authorization": `Bearer ${auth?.raw}`,
      "Content-Type": "application/json",
    }
  })

  if (res.status === 200) {
    return redirect("/recruiter/offers/" + offerId + "?status=success");
  }

  return redirect("/recruiter/offers/" + offerId + "/edit?status=failed");

}


export async function deleteOffer(formData: FormData) {

  const offerId = formData.get("offerId")

  const auth = await getAuth();

  const res = await fetch(`http://127.0.0.1:3000/offers/${offerId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${auth?.raw}`,
    }
  })

  if (res.status === 200) {
    return redirect("/recruiter/offers?status=deleted");
  }

  return false;

}

