import { DecodedToken } from "@/types/token";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function parseJwt(token: string): DecodedToken {
  const base64 = token.split('.')[1].replace('-', '+').replace('_', '/');
  const parsedToken = JSON.parse(atob(base64));

  return {
    raw: token,
    email: parsedToken.sub,
    name: parsedToken.name,
    iat: parsedToken.iat
  }
}