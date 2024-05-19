import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { Offer, columns } from "./columns";
import Link from "next/link";

async function getData(): Promise<Offer[]> {
    // Fetch data from your API here.

    const offers: Offer[] = [
        {
            id: 1,
            title: "Job 1",
            createdAt: "2022-01-01",
        },
        {
            id: 2,
            title: "Job 2",
            createdAt: "2022-01-01",
        },
        {
            id: 3,
            title: "Job 3",
            createdAt: "2022-01-01",
        },
    ];

    return offers;
}

export default async function Offers() {
    const data = await getData();

    return (
        <div className="pt-20 px-4 space-y-5">
            <div className="flex gap-2 justify-between items-center">
                <p className="text-3xl grow font-semibold">My Offers</p>
                <p className="font-medium">Louay Ghanney</p>
                <Link href="/offers">
                    <Button>Logout</Button>
                </Link>
            </div>
            <div>
                <Link href="/recruiter/offers/add">
                    <Button>Add Offer</Button>
                </Link>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
