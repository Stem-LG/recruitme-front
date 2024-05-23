import { getAuth } from "./actions/auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const auth = await getAuth({ required: false });

    if (auth) {
        return redirect("/recruiter/offers");
    }

    return redirect("/offers");
}
