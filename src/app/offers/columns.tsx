"use client";

import { ColumnDef } from "@tanstack/react-table";
import { miniOffer } from "../../types/offer";

export const columns: ColumnDef<miniOffer>[] = [
    {
        accessorKey: "id",
        header: "ID",
        size: 60,
    },
    {
        accessorKey: "title",
        header: "Title",
        size: 999,
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        size: 200,
        cell: ({ getValue }) => {
            return new Date(getValue<Date>()).toLocaleString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            });
        },
    },
];
