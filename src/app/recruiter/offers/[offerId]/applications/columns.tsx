"use client";
import { application, miniApplication } from "@/types/application";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<miniApplication>[] = [
    {
        accessorKey: "id",
        header: "ID",
        size: 60,
    },
    {
        accessorKey: "name",
        header: "Name",
        size: 999,
    },
    {
        accessorKey: "status",
        header: "Accepted",
        size: 60,
        cell: ({ getValue }) => {
            switch (getValue<string>()) {
                case "accepted":
                    return <Badge variant="positive">Accepted</Badge>;
                case "rejected":
                    return <Badge variant="destructive">Rejected</Badge>;
                default:
                    return <Badge>Pending</Badge>;
            }
        },
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        size: 160,
    },
];
