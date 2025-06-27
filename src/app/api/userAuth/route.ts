import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { Currency } from "@/generated/prisma";
import { generateToken } from "@/lib/jwt";

const prisma = new PrismaClient();

export async function GET(res: NextResponse) 
{
    try {
        const getCurrencies = Object.values(Currency);

        if (getCurrencies.length <= 0) return NextResponse.json({message: 'There are no currencies', status: 404});
        return NextResponse.json({message: 'Fetched Currencies', status: 200, results: getCurrencies});
    } catch (error) {
        return NextResponse.json({message: 'Error on DB', status: 500})
    }
}

export async function POST(req: NextRequest)
{
    try {
        const body = await req.json();
        console.log(body);

        const {firstName, lastName, email, password, currency} = body;
        if (!firstName || !lastName || !email || !password || !currency) return NextResponse.json({message: 'Invalid Type', status: 401});
        const checkUserMail = await prisma.user.findUnique({where: 
            {email: email}
        });

        if (checkUserMail) {
            return NextResponse.json({message: 'You already exist, create with another mail or find a new one', status: 409}) //conflict
        } 

        try {
            const createUser = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password,
                    currency,
                }
            });

            const token = generateToken({email: createUser.email});

            if (!createUser) return NextResponse.json({message: 'Error creating you', status: 400});
            return NextResponse.json({message: 'You are recorded as a user', status: 200, results: createUser, identity: token})
        } catch (error) {
            return NextResponse.json({message: 'No register', status: 400})
        }
       
    } catch (error) {
        return NextResponse.json({message: 'Error on DB', status: 500, issue: error});
    }
}