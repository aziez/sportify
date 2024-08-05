import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export interface CategoriesData {
  name: any;
}

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const requestData: CategoriesData = await request.json();

    const { name } = requestData;

    const newCategory = await prisma.categories.create({
      data: {
        name: name,
      },
    });

    return NextResponse.json(
      { message: 'Category added successfully', data: newCategory },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to add category:', error);
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
}
