import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { getOffer } from "@/app/actions/getOffer";

export default async function EditOfferForm({ params: { offerId } }: { params: { offerId: number } }) {
    const offer = await getOffer(offerId);

    return (
        <div className="pt-20 px-4 space-y-5">
            <div className="flex items-center gap-2">
                <Link href={`/recruiter/offers/${offerId}`}>
                    <Button variant="ghost" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <p className="text-3xl font-semibold grow">Edit Job Offer</p>
            </div>

            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Job Information</CardTitle>
                    <CardDescription>Modify job information to edit</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" placeholder="Example Title" required defaultValue={offer.title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="company">Company</Label>
                            <Input
                                id="company"
                                type="text"
                                placeholder="Example Company"
                                defaultValue={offer.company}
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="skills">Skills</Label>
                            <Input
                                id="skills"
                                type="text"
                                placeholder="Skill1, Skill2, Skill3..."
                                defaultValue={offer.skills}
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" rows={5} defaultValue={offer.description} required />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Link href="/recruiter/offers">
                        <Button type="submit" className="w-full">
                            Save
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
