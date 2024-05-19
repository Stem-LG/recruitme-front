import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Link from "next/link";
import { getOffers } from "@/app/actions/getOffers";

export default async function Offers() {
    const data = await getOffers();

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
