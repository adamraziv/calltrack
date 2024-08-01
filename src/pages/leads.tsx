import React from 'react';
import Link from 'next/link';
import LeadsTable from '@/components/LeadsTable';
import { Button } from "@/components/ui/button";

export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                Home
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Leads</h1>
          <LeadsTable />
        </div>
      </main>
    </div>
  );
}