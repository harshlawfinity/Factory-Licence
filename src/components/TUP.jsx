import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();
const workerHeaders = [
  "Up - 50 ",
  "51 - 150 ",
  "151 - 250 ",
  "251 - 500 ",
  "501 - 1000 ",
  "1001 - 2500 ",
  "Above 2500 ",
];

const feeData = [
  {
    hp: "Without HP",
    values: [150, 700, 900, 1700, 3500, 6500, 10000],
  },
  {
    hp: "Up to 50",
    values: [600, 1800, 2800, 3700, 6800, 12500, 14600],
  },
  {
    hp: "Above 50 Up to 100",
    values: [1200, 2700, 3600, 5700, 9000, 15000, 18000],
  },
  {
    hp: "Above 100 Up to 500",
    values: [2500, 5500, 7200, 9600, 14400, 22000, 25000],
  },
  {
    hp: "Above 500 Up to 1000",
    values: [5000, 7500, 9400, 12000, 18000, 245000, 30000],
  },
  {
    hp: "Above 1000 Up to 2000",
    values: [6000, 9500, 11500, 14000, 19000, 26500, 32000],
  },
  {
    hp: "Above 2000",
    values: [7000, 12500, 14500, 16500, 24000, 29000, 35000],
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
