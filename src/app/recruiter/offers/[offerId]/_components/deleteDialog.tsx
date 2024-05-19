"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export function DeleteDialog() {
    return (
        <Dialog>
            <DialogTrigger className={buttonVariants({ variant: "destructive" })} suppressHydrationWarning>
                Delete
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Job Offer</DialogTitle>
                    <DialogDescription>Are you sure you want to delete this job offer?</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <DialogClose>
                        <Button variant="destructive">Delete</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
