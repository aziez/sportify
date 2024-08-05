import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

// GET ALL CATEGORIES
export async function GET(req: NextRequest) {
  if (req.method !== 'GET') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const fields = await prisma.field.findMany({
      select: {
        id: true,
        name: true,
        venueId: true,
        venue: true,
        fieldType: true,
        Categories: true,
        availableStock: true,
        pricePerHour: true,
        pricePerDay: true,
        description: true,
        imageUrl: true,
        location: true,
      },
    });

    return NextResponse.json(
      { message: `Successfully get data fields`, data: fields },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to get data:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
