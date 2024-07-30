import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export interface VanueData {
  name: string;
  location: string;
  lat: number;
  lng: number;
  logo: string;
}

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const requestData: VanueData = await request.json();
    const session = await getServerSession(authOptions);
    const userId = await session?.user?.id;
    const { name, location, lat, lng, logo } = requestData;

    await prisma.venue.create({
      data: {
        userId,
        name,
        location,
        lat,
        lng,
        logo,
      },
    });

    return NextResponse.json(
      { message: 'Succesfully add vanue' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to add vanue:', error);
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  if (req.method !== 'GET') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const vanues = await prisma.venue.findMany();

    return NextResponse.json(
      { message: `Successfully get data vanues`, data: vanues },
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
