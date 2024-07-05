import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export interface ResendVerify {
  email: string;
}

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const categories = await prisma.categories.findMany({
      select: {
        id: true,
        name: true,
        Products: {
          take: 8,
          select: {
  name        String
  categoryId    String    
  location    String?
  address     String?
  facilities  String[]
  pricePerHour Float
  pricePerDay  Float
  description String
  imageUrl    String
  user        User    @relation(fields: [userId], references: [id])
  category    Categories @relation(fields: [categoryId], references: [id])
  bookings    Booking[]
          },
        },
      },
    });

    return NextResponse.json(
      { message: `Resend verify successfully to ${email}` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to resend verification email:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
