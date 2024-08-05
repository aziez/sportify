import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id;

  console.log(userId, 'DATA IDDD');

  if (!userId) {
    return NextResponse.json(
      { message: 'USER ID is Notmatching' },
      { status: 400 }
    );
  }

  try {
    const vanue = await prisma.venue.findUnique({
      where: { userId },
      include: {
        products: true,
      },
    });

    if (!vanue) {
      return NextResponse.json({ message: 'Vanue not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Successfully retrieved vanue', data: vanue },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to get vanue:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
