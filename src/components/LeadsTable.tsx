import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const dummyData = [
  { id: 1, name: 'John Doe', company: 'ABC Corp', phone: '123-456-7890', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', company: 'XYZ Inc', phone: '987-654-3210', email: 'jane@example.com' },
  // Add more dummy data as needed
];

export default function LeadsTable() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Leads</h2>
      
      <Input 
        type="text" 
        placeholder="Search leads..." 
        className="mb-4"
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyData.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.company}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}