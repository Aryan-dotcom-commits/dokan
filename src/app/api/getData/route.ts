import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../globalPrisma";

export async function GET(req: NextRequest) 
{
    try {
            const getCurrency = await prisma.user.findMany({
            where: { currency: { in: ['NPR', 'INR', 'Dollars'] } } 
    });

        if (!getCurrency) return NextResponse.json({message: 'Bro'})

        if (getCurrency) return NextResponse.json({message: getCurrency})
    } catch (error) {
        return NextResponse.json({message: 'Error', errors: error})
    }

}