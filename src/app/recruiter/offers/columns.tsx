import { Offer } from "@/app/types/offer";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Offer>[] = [
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
    },
];
