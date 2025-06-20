import crypto from "crypto";
import { cookies } from "next/headers";

const algorithm = 'aes-256-cbc' //cbc is Cipher Block Chaining
const secretKey = process.env.SECRET_KEY || 'abc';

const ivLength = 16;

function getKey()
{
    return Buffer.from(secretKey).slice(0,32);
}

export function encrypt(data: any) 
{
    const iv = crypto.randomBytes(ivLength);
    const cipher = crypto.createCipheriv(algorithm, getKey(), iv);
    let encrypted = cipher.update(JSON.stringify(data), "utf8", "hex");
    encrypted += cipher.final("hex");
    return iv.toString("hex") + ":" + encrypted;
}
 
export function decrypt(data: string) {
  const [ivHex, encryptedData] = data.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv(algorithm, getKey(), iv);
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return JSON.parse(decrypted);
}

export function generateSession(user: { id: number; email: string }) {
  return encrypt({ id: user.id, email: user.email, createdAt: Date.now() });
}
