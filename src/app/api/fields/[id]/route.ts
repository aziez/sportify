import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const venueId = params.id;

  console.log(venueId, 'VENUEE IDDD');

  if (!venueId) {
    return NextResponse.json(
      { message: 'Venue ID is required' },
      { status: 400 }
    );
  }

  try {
    const field = await prisma.field.findUnique({
      where: { venueId: venueId },
    });

    if (!field) {
      return NextResponse.json({ message: 'Venue not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Successfully retrieved field', data: field },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to get field:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
