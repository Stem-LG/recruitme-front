import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { Offer, columns } from "./columns";
import Link from "next/link";

export async function getOffers(): Promise<Offer[]> {
    // Fetch data from your API here.

    const offers: Offer[] = [
        {
            id: 1,
            title: "Job 1",
            company: "Company 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            skills: "Skill 1, Skill 2, Skill 3...",
            createdAt: "2022-01-01",
        },
        {
            id: 2,
            title: "Job 2",
            company: "Company 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            skills: "Skill 1, Skill 2, Skill 3...",
            createdAt: "2022-01-01",
        },
        {
            id: 3,
            title: "Job 3",
            company: "Company 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            skills: "Skill 1, Skill 2, Skill 3...",
            createdAt: "2022-01-01",
        },
    ];

    return offers;
}

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
