import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // console.log(id, 'DATA IDDD');

  if (!id) {
    return NextResponse.json(
      { message: 'Category ID is required' },
      { status: 400 }
    );
  }

  try {
    const category = await prisma.categories.findUnique({
      where: { id },
      select: {
        name: true,
        Products: true,
      },
    });

    if (!category) {
      return NextResponse.json(
        { message: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully retrieved category', data: category },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to get category:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
