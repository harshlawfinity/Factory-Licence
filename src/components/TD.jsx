import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

  const feeData = [
    {
      hp: "Nil",
      values: [100, 200, 400, 1000, 1600, 3000, 4000, 5000],
    },
    {
      hp: "Up to 10",
      values: [200, 400, 480, 1200, 2400, 3600, 4800, 6000],
    },
    {
      hp: "Above 10 and up to 50",
      values: [400, 600, 800, 2000, 4000, 6000, 8000, 10000],
    },
    {
      hp: "Above 50 and up to 100",
      values: [800, 1000, 1200, 3000, 6000, 9000, 12000, 15000],
    },
    {
      hp: "Above 100",
      values: [1200, 1600, 2000, 4000, 8000, 12000, 16000, 20000],
    },
  ];

  const workerHeaders = [
    "Up - 20",
    "21 - 50",
    "51 - 100",
    "101 - 250",
    "251 - 500",
    "501 - 750",
    "751 - 1000",
    "Above 1000",
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
