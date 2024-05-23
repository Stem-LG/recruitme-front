import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getOffer } from "@/app/actions/offers";
import { getApplication, updateApplication } from "@/app/actions/applications";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAuth, logout } from "@/app/actions/auth";

export default async function ApplicationDetails({
    params: { offerId, applicationId },
    searchParams: { status },
}: {
    params: { offerId: number; applicationId: number };
    searchParams: { status?: string };
}) {

    const auth = await getAuth();

    const offer = await getOffer(offerId);

    const application = await getApplication(applicationId);

    const createdAt = new Date(offer.createdAt).toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return (
        <div className="pt-20 px-4 space-y-5" suppressHydrationWarning>
            <div className="flex items-center gap-2">
                <Link href={`/recruiter/offers/${offerId}/applications`}>
                    <Button variant="ghost" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <p className="text-3xl font-semibold grow">Application Details</p>
                <p className="font-medium">{auth.name}</p>
                <form action={logout}>
                    <Button>Logout</Button>
                </form>
            </div>

            <Card className="">
                <CardHeader>
                    <div className="flex justify-between">
                        <CardTitle>{offer.title}</CardTitle>
                        <CardDescription>#{application.id}</CardDescription>
                    </div>
                    <CardDescription>By {offer.company}</CardDescription>
                    <div className="flex justify-between">
                        <CardDescription>Applied at {createdAt}</CardDescription>
                        <Badge
                            variant={
                                application.status == "accepted"
                                    ? "positive"
                                    : application.status == "rejected"
                                    ? "destructive"
                                    : "default"
                            }
                        >
                            {application.status}{" "}
                        </Badge>
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
                    <p className="font-medium text-lg">AI Resume Summary: </p>
                    <ScrollArea className="h-56 rounded border p-2">
                        <p className="text-sm whitespace-pre-wrap">{application.resumeSummary}</p>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="gap-2">
                    <form action={updateApplication}>
                        <input hidden readOnly name="applicationId" value={applicationId} />
                        <input hidden readOnly name="action" value="accept" />
                        <Button type="submit" variant="positive">
                            Accept
                        </Button>
                    </form>
                    <form action={updateApplication}>
                        <input hidden readOnly name="applicationId" value={applicationId} />
                        <input hidden readOnly name="action" value="reject" />
                        <Button type="submit" variant="destructive">
                            Reject
                        </Button>
                    </form>
                    {status == "success" && <p className="text-green-500">Application updated</p>}
                    {status == "failed" && <p className="text-red-500">Failed to update application</p>}
                </CardFooter>
            </Card>
        </div>
    );
}
