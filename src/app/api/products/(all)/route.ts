import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET ALL CATEGORIES
export async function GET(req: NextRequest) {
  if (req.method !== 'GET') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 },
    );
  }

  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(
      { message: `Successfully get data products`, data: products },
      { status: 200 },
    );
  } catch (error) {
    console.error('Failed to get data:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
