import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', calls: 400, conversions: 240 },
  { name: 'Feb', calls: 300, conversions: 139 },
  { name: 'Mar', calls: 200, conversions: 980 },
  { name: 'Apr', calls: 278, conversions: 390 },
  { name: 'May', calls: 189, conversions: 480 },
];

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('weekly');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calling Activities Dashboard</h1>
      
      <Select onValueChange={(value) => setTimeRange(value)}>
        <SelectTrigger className="w-[180px] mb-4">
          <SelectValue placeholder="Select time range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="yearly">Yearly</SelectItem>
        </SelectContent>
      </Select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,367</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2,229</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">18.3%</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Calls and Conversions Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="calls" stroke="#8884d8" />
              <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}