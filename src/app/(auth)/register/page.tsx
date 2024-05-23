import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { register } from "@/app/actions/auth";

export default function RegisterForm({ searchParams: { status } }: { searchParams: { status?: string } }) {
    return (
        <div className="flex min-h-svh items-center justify-center">
            <div className="space-y-2">
                <Link href="/offers">
                    <Button variant="ghost" className="pl-2 space-x-2">
                        <ChevronLeft />
                        <p className="text-lg font-medium">Offers</p>
                    </Button>
                </Link>
                <Card className="w-96">
                    <CardHeader>
                        <CardTitle className="text-xl">Sign Up</CardTitle>
                        <CardDescription>Enter your information to create an account</CardDescription>
                    </CardHeader>
                    <form action={register}>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="full-name">Full name</Label>
                                    <Input id="full-name" name="name" placeholder="Max Verstappen" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" name="password" type="password" />
                                </div>
                                <Button type="submit" className="w-full">
                                    Create an account
                                </Button>
                                {status == "failed" && <p className="text-red-500">Registration failed</p>}
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Already have an account?{" "}
                                <Link href="/login" className="underline">
                                    Sign in
                                </Link>
                            </div>
                        </CardContent>
                    </form>
                </Card>
            </div>
        </div>
    );
}
