"use server"

import { getOffers } from "./getOffers";

export async function getOffer(offerId: number) {
  const offers = await getOffers();

  return offers.find((offer) => offer.id == offerId);
}
