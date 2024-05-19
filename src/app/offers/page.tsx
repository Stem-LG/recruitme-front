import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Link from "next/link";
import { getOffers } from "../actions/getOffers";

export default async function Offers() {
    const data = await getOffers();

    return (
        <div className="pt-20 px-4 space-y-5">
            <div className="flex justify-between items-center">
                <p className="text-3xl font-semibold">Job Offers</p>
                <Link href="/login">
                    <Button>Login</Button>
                </Link>
            </div>

            <DataTable columns={columns} data={data} />
        </div>
    );
}
