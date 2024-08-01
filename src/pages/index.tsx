import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Calling Activities Tracker</h1>
      <div className="space-x-4">
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
        <Link href="/leads">
          <Button variant="outline">View Leads</Button>
        </Link>
      </div>
    </div>
  );
}