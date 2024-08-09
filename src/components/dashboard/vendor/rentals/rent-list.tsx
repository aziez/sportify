'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

// Sample data structure based on your Prisma schema
const fields = [
  {
    id: '1',
    name: 'Laser Lemonade Machine',
    fieldType: 'Draft',
    pricePerHour: 499.99,
    availableStock: 25,
    createdAt: '2023-07-12T10:42:00Z',
    imageUrl: '/placeholder.svg',
  },
];

const RentalTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="hidden md:table-cell">Price per Hour</TableHead>
          <TableHead className="hidden md:table-cell">
            Available Stock
          </TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fields.map((field) => (
          <TableRow key={field.id}>
            <TableCell className="hidden sm:table-cell">
              <Image
                alt={`${field.name} image`}
                className="aspect-square rounded-md object-cover"
                height="64"
                src={field.imageUrl}
                width="64"
              />
            </TableCell>
            <TableCell className="font-medium">{field.name}</TableCell>
            <TableCell>
              <Badge variant="outline">{field.fieldType}</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              ${field.pricePerHour.toFixed(2)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {field.availableStock}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {new Date(field.createdAt).toLocaleString()}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RentalTable;
