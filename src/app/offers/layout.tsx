import { redirect } from "next/navigation";
import { getAuth } from "../actions/auth";

export default async function OffersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const auth = await getAuth({ required: false });

    if (auth) {
        return redirect("/recruiter/offers");
    }

    return children;
}
