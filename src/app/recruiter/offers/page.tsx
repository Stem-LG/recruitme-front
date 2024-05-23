import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Link from "next/link";
import { getRecruiterOffers } from "@/app/actions/offers";
import { getAuth, logout } from "@/app/actions/auth";

export default async function Offers({ searchParams: { status } }: { searchParams: { status?: string } }) {
    const data = await getRecruiterOffers();
    const auth = await getAuth();

    return (
        <div className="pt-20 px-4 space-y-5">
            <div className="flex gap-2 justify-between items-center">
                <p className="text-3xl grow font-semibold">My Offers</p>
                <p className="font-medium">{auth.name}</p>
                <form action={logout}>
                    <Button type="submit">Logout</Button>
                </form>
            </div>
            <div className="flex items-center gap-2">
                <Link href="/recruiter/offers/add">
                    <Button>Add Offer</Button>
                </Link>
                {status == "success" && <p className="text-green-500">Offer added</p>}
                {status == "deleted" && <p className="text-red-500">Offer deleted</p>}
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
