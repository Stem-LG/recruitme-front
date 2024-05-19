import { getOffer } from "@/app/offers/[offerId]/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { DeleteDialog } from "./_components/deleteDialog";

export default async function Offer({ params: { offerId } }: { params: { offerId: number } }) {
    const offer = await getOffer(offerId);

    return (
        <div className="pt-20 px-4 space-y-5" suppressHydrationWarning>
            <div className="flex items-center gap-2">
                <Link href="/recruiter/offers">
                    <Button variant="ghost" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <p className="text-3xl font-semibold grow">Job Offer Details</p>
                <p className="font-medium">Louay Ghanney</p>
                <Link href="/offers">
                    <Button>Logout</Button>
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
                <CardFooter className="gap-2">
                    <Link href={`/recruiter/offers/${offerId}/applications`}>
                        <Button>Applicants List</Button>
                    </Link>
                    <Link href={`/recruiter/offers/${offerId}/edit`}>
                        <Button variant="secondary">Edit</Button>
                    </Link>
                    <DeleteDialog />
                </CardFooter>
            </Card>
        </div>
    );
}
