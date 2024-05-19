import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { Application, columns } from "./columns";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function getApplications(): Promise<Application[]> {
    // Fetch data from your API here.

    const offers: Application[] = [
        {
            id: 1,
            createdAt: "2022-01-01",
            status: "accepted",
            name: "John Doe",
            email: "some@example.com",
            motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            createdAt: "2022-01-01",
            status: "rejected",
            name: "John Doe",
            email: "louay@example.com",
            motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 3,
            createdAt: "2022-01-01",
            status: "pending",
            name: "John Doe",
            email: "yeye@example.com",
            motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

    return offers;
}

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
