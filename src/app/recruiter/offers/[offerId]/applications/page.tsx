import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import {  columns } from "./columns";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getApplications } from "@/app/actions/getApplications";

export default async function Offers({ params: { offerId } }: { params: { offerId: number } }) {
    const data = await getApplications();

    return (
        <div className="pt-20 px-4 space-y-5">
            <div className="flex gap-2 justify-between items-center">
                <Link href={`/recruiter/offers/${offerId}/`}>
                    <Button variant="ghost" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <p className="text-3xl grow font-semibold">Job Applicants</p>
                <p className="font-medium">Louay Ghanney</p>
                <Link href="/offers">
                    <Button>Logout</Button>
                </Link>
            </div>
            <DataTable columns={columns} data={data} offerId={offerId} />
        </div>
    );
}
