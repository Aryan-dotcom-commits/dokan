import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// GET Method to find all the products.
export async function GET()
{
    try {
        const getProducts = await prisma.products.findMany();

        if (getProducts.length <= 0) return NextResponse.json({message: 'No products yet', status: 400}); 
        return NextResponse.json({message: 'Products fetched', status: 201, values: getProducts});
    } catch (error) {
        return NextResponse.json({message: 'Error fetching products', status: 500});
    }
}