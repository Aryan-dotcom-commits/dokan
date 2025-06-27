import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { generateToken, verifyToken } from "@/lib/jwt";
import { parse, serialize } from 'cookie';

const prisma = new PrismaClient();

// POST Request for User Login
export async function POST(req: NextRequest)
{
    try {
        const body = await req.json()
        const {email, password} = body;
        console.log(body);

        if (!email || typeof email !== 'string') return NextResponse.json({message: 'Invalid Email', status: 400});
        if (!password || typeof password !== 'string') return NextResponse.json({message: 'Invalid Password', status: 400});

        // check for existing email
        const user = await prisma.user.findUnique({
            where: {email}
        });

        if (!user) return NextResponse.json({message: 'Email does not exist', status: 404});

        const token = generateToken({email: user.email});
        
        // Set token as a cookie.
        const response = NextResponse.json({message: 'You are logged in', status: 200});

        response.headers.set(
            'Set-Cookie',
            serialize('token', token, {
                httpOnly: true,
                path: '/',
                sameSite: 'lax',
                maxAge: 60 * 60,
                secure: process.env.NODE_ENV == "production",
            })
        );

        return NextResponse.json({message: 'Login successful', status: 200, values: response});
    } catch (error) {
        return NextResponse.json({message: 'Error on DB', status: 500, results: error})
    }
}

// GET Request for cookie
export async function GET(req: NextRequest) 
{
    try {
        const cookie = req.headers.get('cookie');
        const cookies = parse(cookie ?? '');

        const token = cookies.token;

        if (!token) return NextResponse.json({message: 'Token is not provided', status: 401});

        const findToken = await verifyToken(token);
        return NextResponse.json({message: 'Token is valid', status: 200, values: findToken});
    } catch (error) {
        return NextResponse.json({ message: 'Error verifying token', status: 500, results: error });
    }
}