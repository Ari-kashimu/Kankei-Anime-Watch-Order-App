import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const RelatedGroupSection = () => {
    return (
        <Table className="w-1/2  no-scrollbar!">
            <TableCaption className="text-white/80">
                Current group is also indirectly related to the following groups
            </TableCaption>
            <TableHeader>
                <TableRow className="hover:bg-white/15">
                    <TableHead className="text-white">Group Name</TableHead>
                    <TableHead className="text-right text-white">
                        Relation Type
                    </TableHead>
                </TableRow>
            </TableHeader>
            {/*  */}
            <TableBody>
                <TableRow className="hover:bg-white/15">
                    <TableCell>
                        <a
                            className="hover:text-white! no-underline! hover:underline!"
                            href="#">
                            Bleach
                        </a>
                    </TableCell>
                    <TableCell className="text-right">Others</TableCell>
                </TableRow>
                <TableRow className="hover:bg-white/15">
                    <TableCell>
                        <a
                            className="hover:text-white! no-underline! hover:underline!"
                            href="#">
                            naruto
                        </a>
                    </TableCell>
                    <TableCell className="text-right">Others</TableCell>
                </TableRow>
                <TableRow className="hover:bg-white/15">
                    <TableCell>
                        <a
                            className="hover:text-white! no-underline! hover:underline!"
                            href="#">
                            naruto
                        </a>
                    </TableCell>
                    <TableCell className="text-right">Others</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default RelatedGroupSection;
