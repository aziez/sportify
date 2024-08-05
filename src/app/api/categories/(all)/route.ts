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
    const categories = await prisma.categories.findMany({
      select: {
        id: true,
        name: true,
        Subcategories: true,
        Products: true,
        Fields: true,
        _count: {
          select: { Products: true, Fields: true },
        },
      },
    });

    return NextResponse.json(
      { message: `Successfully get data categories`, data: categories },
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

// ADD DATA CATEGORIES
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

// UPDATE DATA CATEGORIES
export interface UpdateCategoryData {
  id: string;
  name: any;
}

export async function PATCH(request: Request) {
  if (request.method !== 'PATCH') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const requestData: UpdateCategoryData = await request.json();

    const { id, name } = requestData;

    const updatedCategory = await prisma.categories.update({
      where: { id: id },
      data: { name: name },
    });

    return NextResponse.json(
      { message: 'Category updated successfully', data: updatedCategory },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to update category:', error);
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
}

// DELETED DATA CATEGORIES
export interface DeleteCategoryData {
  id: string;
}

export async function DELETE(request: Request) {
  if (request.method !== 'DELETE') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const requestData: DeleteCategoryData = await request.json();
    const { id } = requestData;

    const deletedCategory = await prisma.categories.delete({
      where: { id: id },
    });

    return NextResponse.json(
      { message: 'Category deleted successfully', data: deletedCategory },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to delete category:', error);
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
}
