import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

export default function LoginForm() {
    return (
        <div className="flex min-h-svh items-center justify-center">
            <div className="space-y-2">
                <Link href="/offers">
                    <Button variant="ghost" className="pl-2 space-x-2">
                        <ChevronLeft />
                        <p className="text-lg font-medium">Offers</p>
                    </Button>
                </Link>
                <Card className="w-96 ">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>Enter your email below to login to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required />
                            </div>
                            <Link href="/recruiter/offers">
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
