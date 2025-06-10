import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();
 const workerHeaders = [
    "Up - 20",
    "21 - 40",
    "41 - 150",
    "151 - 250",
    "251 - 500",
    "501 - 1000",
    "1001 - 2000",
    "2001 - 3000",
    "Above 3000",
  ];

  const feeData = [
    {
      hp: "Without HP",
      values: [1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000, 13500],
    },
    {
      hp: "Up to 10",
      values: [3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000, 27000],
    },
    {
      hp: "Above 10 Up to 50",
      values: [4500, 9000, 13500, 18000, 22500, 27000, 31500, 36000, 40500],
    },
    {
      hp: "Above 50 Up to 100",
      values: [6000, 12000, 18000, 24000, 30000, 36000, 42000, 48000, 54000],
    },
    {
      hp: "Above 100 Up to 500",
      values: [7500, 15000, 22500, 30000, 37500, 45000, 52500, 60000, 67500],
    },
    {
      hp: "Above 500 Up to 1000",
      values: [9000, 18000, 27000, 36000, 45000, 54000, 63000, 72000, 81000],
    },
    {
      hp: "Above 1000 Up to 2000",
      values: [10500, 21000, 31500, 42000, 52500, 63000, 73500, 84000, 94500],
    },
    {
      hp: "Above 2000",
      values: [12000, 24000, 36000, 48000, 60000, 72000, 84000, 96000, 108000],
    },
  ];

const columns = [
  columnHelper.accessor("hp", {
    header: "H.P. Installed",
    cell: (info) => info.getValue(),
  }),
  ...workerHeaders.map((label, index) =>
    columnHelper.accessor((row) => row.values[index], {
      id: label,
      header: label,
      cell: (info) => `₹${info.getValue()}`,
    })
  ),
];

export default function ResponsiveFeeTable() {
  const table = useReactTable({
    data: feeData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-[1000px] border-collapse w-full text-sm text-left border border-gray-300">
        <thead className="bg-gray-100 text-gray-700 font-medium">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border px-4 py-2 whitespace-nowrap"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="even:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-4 py-2 text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
