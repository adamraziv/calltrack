import React, { useState, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CsvUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [columns, setColumns] = useState<string[]>([]);
  const [selectedColumns, setSelectedColumns] = useState<Record<string, boolean>>({});

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Read CSV and extract columns
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content = e.target?.result as string;
        const lines = content.split('\n');
        if (lines.length > 0) {
          const headers = lines[0].split(',');
          setColumns(headers);
          const initialSelectedColumns: Record<string, boolean> = {};
          headers.forEach(header => {
            initialSelectedColumns[header] = true;
          });
          setSelectedColumns(initialSelectedColumns);
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleColumnToggle = (column: string) => {
    setSelectedColumns(prev => ({
      ...prev,
      [column]: !prev[column]
    }));
  };

  const handleUpload = () => {
    // Implement upload logic here
    console.log('Uploading file:', file);
    console.log('Selected columns:', selectedColumns);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Upload CSV</h2>
      <Input type="file" accept=".csv" onChange={handleFileChange} className="mb-4" />
      
      {columns.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Select columns to import:</h3>
          {columns.map((column, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <Checkbox 
                id={`column-${index}`}
                checked={selectedColumns[column]}
                onCheckedChange={() => handleColumnToggle(column)}
              />
              <Label htmlFor={`column-${index}`}>{column}</Label>
            </div>
          ))}
        </div>
      )}
      
      <Button onClick={handleUpload} disabled={!file}>Upload</Button>
    </div>
  );
}