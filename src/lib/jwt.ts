import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'fallback';

export function generateToken(payload: object) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1D' });
}

export function verifyToken(token: string)
{
    return jwt.verify(token, JWT_SECRET);
}