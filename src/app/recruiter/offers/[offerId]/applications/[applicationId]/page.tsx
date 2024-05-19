import { getOffer } from "@/app/offers/[offerId]/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { getApplications } from "../page";
import { Badge } from "@/components/ui/badge";

export async function getApplication(id: number) {
    const applications = await getApplications();

    return applications.find((application) => application.id == id);
}

export default async function ApplicationDetails({
    params: { offerId, applicationId },
}: {
    params: { offerId: number; applicationId: number };
}) {
    const offer = await getOffer(offerId);

    const application = await getApplication(applicationId);

    return (
        <div className="pt-20 px-4 space-y-5" suppressHydrationWarning>
            <div className="flex items-center gap-2">
                <Link href={`/recruiter/offers/${offerId}/applications`}>
                    <Button variant="ghost" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <p className="text-3xl font-semibold grow">Application Details</p>
                <p className="font-medium">Louay Ghanney</p>
                <Link href="/offers">
                    <Button>Logout</Button>
                </Link>
            </div>

            <Card className="">
                <CardHeader>
                    <div className="flex justify-between">
                        <CardTitle>{offer.title}</CardTitle>
                        <CardDescription>#{application.id}</CardDescription>
                    </div>
                    <div className="flex justify-between">
                        <CardDescription>
                            Posted at {offer.createdAt} by {offer.company}
                        </CardDescription>
                        <CardDescription>
                            <StatusBadge status={application.status} />
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-sm">
                        <span className="font-medium text-lg">Name: </span>
                        {application.name}
                    </p>
                    <p className="text-sm">
                        <span className="font-medium text-lg">Email: </span>
                        {application.email}
                    </p>
                    <p className="font-medium text-lg">Motivation: </p>
                    <p className="text-sm">{application.motivation}</p>
                    <p className="font-medium text-lg">Resume AI Summary: </p>
                    <p className="text-sm">{application.summary}</p>
                </CardContent>
                <CardFooter className="gap-2">
                    <Link href={`/recruiter/offers/${offerId}/applications`}>
                        <Button variant="positive">Accept</Button>
                    </Link>
                    <Link href={`/recruiter/offers/${offerId}/edit`}>
                        <Button variant="destructive">Reject</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}

function StatusBadge({ status }: { status: "accepted" | "rejected" | "pending" }) {
    switch (status) {
        case "accepted":
            return <Badge variant="positive">Accepted</Badge>;
        case "rejected":
            return <Badge variant="destructive">Rejected</Badge>;
        default:
            return <Badge>Pending</Badge>;
    }
}
