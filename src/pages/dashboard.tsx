import React from 'react';
import Link from 'next/link';
import Dashboard from '@/components/Dashboard';
import CsvUpload from '@/components/CsvUpload';
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
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
              <Link href="/leads">
                <Button variant="ghost">View Leads</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Dashboard />
          <div className="mt-10">
            <CsvUpload />
          </div>
        </div>
      </main>
    </div>
  );
}