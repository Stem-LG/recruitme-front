import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { getOffer } from "../page";
import { Textarea } from "@/components/ui/textarea";

export default async function ApplicationForm({ params: { offerId } }: { params: { offerId: number } }) {
    const offer = await getOffer(offerId);

    return (
        <div className="pt-20 px-4 space-y-5">
            <div className="flex items-center gap-2">
                <Link href="/offers">
                    <Button variant="ghost" size="icon">
                        <ChevronLeft />
                    </Button>
                </Link>
                <p className="text-3xl font-semibold grow">Submit Application</p>
            </div>

            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                    <CardDescription>Enter your information to apply</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="full-name">Full name</Label>
                            <Input id="full-name" placeholder="Max Verstappen" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex">
                                <Label htmlFor="resume">Resume (PDF)</Label>
                            </div>
                            <div className="relative h-10 w-full">
                                <Input
                                    id="resume"
                                    className="absolute top-0 left-0 bg-transparent z-50 px-1.5"
                                    type="file"
                                    accept="application/pdf"
                                />
                                <div className="absolute border border-input top-0 left-0 h-full rounded-md w-24 bg-primary" />
                            </div>
                            <p className="text-xs text-primary/50">*AI processed</p>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="motivation">Motivation</Label>
                            <Textarea id="motivation" rows={5} required />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">
                        Apply
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
