import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../globalPrisma";
import { serialize } from "cookie";
import { encrypt } from "@/lib/session";
import { NextApiResponse } from "next";

export async function POST(req: NextRequest, res: NextApiResponse)
{
    try {
        const body = await req.json();
        try {
            const body = await req.json();
            console.log(body);
        } catch {
            return NextResponse.json({message: "Invalid json"})
        }

        const {firstName, lastName, email, password, phoneNumber, currency} = body
        if (!firstName || !lastName || !email || !password || !phoneNumber || !currency) return NextResponse.json({message: "Missing Fields"});
        const findEmail = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (findEmail) return NextResponse.json({
            message: "There is already an account with this mail, please use something else", 
            status: 409, 
            type: "Conflict"
        });

        const userCreated = await prisma.user.create({
            data: {
                firstName, 
                lastName, 
                email, 
                password,
                phoneNumber,
                currency
            }
        })

        const success = NextResponse.json({message: "User has been created", status: 201, res: userCreated})

        if (success) {
            const sessionData = success;
            const encryptedData = encrypt(sessionData);

            const cookie = serialize('session', encryptedData, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60,
                path: '/'
            });

            res.setHeader('Set-Cookie', cookie);
            return NextResponse.json({message: 'User has been created', status: 200, cookie: cookie});
        }
    }

    catch (error) {
        return NextResponse.json({message: "Server Error", status: 500, issue: error})
    }
}