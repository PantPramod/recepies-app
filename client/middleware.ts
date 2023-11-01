
import { NextRequest, NextResponse } from 'next/server'
import delToken from './app/helper/delToken';

export async function middleware(req: NextRequest) {
    if (req.url.includes("/logout")) {
         
        const response = NextResponse.redirect(new URL('/login', req.url))
        response.cookies.delete("access")
        delToken()

        return response;
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/logout'],
}