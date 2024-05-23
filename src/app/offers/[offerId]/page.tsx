import { getOffer } from "@/app/actions/offers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Offer({
    params: { offerId },
    searchParams: { status },
}: {
    params: { offerId: number };
    searchParams: { status?: string };
}) {
    const offer = await getOffer(offerId);

    const createdAt = new Date(offer.createdAt).toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

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
                        Posted at {createdAt} for {offer.company}
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

            {status === "success" && <div className="text-green-500">Application submitted successfully!</div>}
        </div>
    );
}
