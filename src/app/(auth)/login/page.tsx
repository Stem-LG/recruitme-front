import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { login } from "../../actions/auth";

export default function LoginForm({ searchParams: { status } }: { searchParams: { status?: string } }) {
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
                    <form action={login}>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" name="password" type="password" required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                                {status == "failed" && <p className="text-red-500">Email or password is incorrect</p>}
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/register" className="underline">
                                    Sign up
                                </Link>
                            </div>
                        </CardContent>
                    </form>
                </Card>
            </div>
        </div>
    );
}
