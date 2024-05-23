import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { deleteOffer, getOffer } from "@/app/actions/offers";
import { getAuth, logout } from "@/app/actions/auth";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default async function Offer({
    params: { offerId },
    searchParams: { status },
}: {
    params: { offerId: number };
    searchParams: { status?: string };
}) {
    const offer = await getOffer(offerId);
    const auth = await getAuth();

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
                <Link href="/recruiter/offers">
                    <Button variant="ghost" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <p className="text-3xl font-semibold grow">Job Offer Details</p>
                <p className="font-medium">{auth.name}</p>
                <form action={logout}>
                    <Button>Logout</Button>
                </form>
            </div>

            <Card className="">
                <CardHeader>
                    <div className="flex justify-between">
                        <CardTitle>{offer.title}</CardTitle>
                        <CardDescription>#{offer.id}</CardDescription>
                    </div>
                    <CardDescription>
                        Posted at {createdAt} by {offer.company}
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
                    <Dialog>
                        <DialogTrigger className={buttonVariants({ variant: "destructive" })} suppressHydrationWarning>
                            Delete
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Delete Job Offer</DialogTitle>
                                <DialogDescription>Are you sure you want to delete this job offer?</DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose>
                                    <Button variant="secondary">Cancel</Button>
                                </DialogClose>
                                <form action={deleteOffer}>
                                    <input hidden readOnly name="offerId" value={offerId} />
                                    <Button type="submit" variant="destructive">
                                        Delete
                                    </Button>
                                </form>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    {status == "success" && <p className="text-green-500">Offer updated successfully</p>}
                </CardFooter>
            </Card>
        </div>
    );
}
