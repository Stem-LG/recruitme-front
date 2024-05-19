import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { getOffers } from "../page";

export async function getOffer(offerId: number) {
    const offers = await getOffers();

    return offers.find((offer) => offer.id == offerId);
}

export default async function Offer({ params: { offerId } }: { params: { offerId: number } }) {
    const offer = await getOffer(offerId);

    return (
        <div className="pt-20 px-4 space-y-5">
            <div className="flex items-center gap-2">
                <Link href="/offers">
                    <Button variant="ghost" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <p className="text-3xl font-semibold grow">Job Offer Details</p>
                <Link href="/login">
                    <Button>Login</Button>
                </Link>
            </div>

            <Card className="">
                <CardHeader>
                    <div className="flex justify-between">
                        <CardTitle>{offer.title}</CardTitle>
                        <CardDescription>#{offer.id}</CardDescription>
                    </div>
                    <CardDescription>
                        Posted at {offer.createdAt} by {offer.company}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-sm">
                        <span className="font-medium text-lg">Skills: </span>
                        {offer.skills}
                    </p>
                    <p className="font-medium text-lg">Description: </p>
                    <p className="text-sm">{offer.description}</p>
                </CardContent>
                <CardFooter>
                    <Link href={`/offers/${offerId}/apply`}>
                        <Button>Apply</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
