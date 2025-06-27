import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { Brands } from "@/generated/prisma";
 
const prisma = new PrismaClient();

//GET all products brands
export async function GET()
{
    try {
        const getBrands = Object.values(Brands);

        if (getBrands.length <= 0) return NextResponse.json({message: 'There are no brands currently', status: 404});
        return NextResponse.json({message: 'Fetched Brands', status: 200, responses: getBrands});
    } catch (error) {
        return NextResponse.json({message: 'Unable to fetch products', status: 500, err: error})
    }
}

export async function POST(req: NextRequest)
{
    try {
        const body = await req.json();
        console.log('You have reached the backend', body);

        const { name, quantity, brand, price, description, productType } = body;

        if (!name || !quantity || !brand || !price || !description || !productType) return NextResponse.json({message: 'Values are missing please fill up', status: 404});

        if (brand.includes(name)) return NextResponse.json({message: 'The product already exists', status: 402});

        const newProduct = await prisma.products.create({
            data: {
                name,
                quantity,
                brand,
                price,
                description,
                productType
            }
        })

        return NextResponse.json({message: 'Product added successfully', status: 201, product: newProduct});
    } catch (error) {
        return NextResponse.json({message: 'Error adding products', status: 500})
    }
}