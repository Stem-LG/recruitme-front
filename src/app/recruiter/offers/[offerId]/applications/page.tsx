import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import {  columns } from "./columns";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getOfferApplications } from "@/app/actions/applications";
import { getAuth, logout } from "@/app/actions/auth";

export default async function Offers({ params: { offerId } }: { params: { offerId: number } }) {
    
    const auth = await getAuth();

    const data = await getOfferApplications(offerId);

    return (
        <div className="pt-20 px-4 space-y-5">
            <div className="flex gap-2 justify-between items-center">
                <Link href={`/recruiter/offers/${offerId}/`}>
                    <Button variant="ghost" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <p className="text-3xl grow font-semibold">Job Applicants</p>
                <p className="font-medium">{auth.name}</p>
                <form action={logout}>
                    <Button>Logout</Button>
                </form>
            </div>
            <DataTable columns={columns} data={data} offerId={offerId} />
        </div>
    );
}
