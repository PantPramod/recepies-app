'use server'

import { cookies } from 'next/headers'

async function saveToken(token:string) {
    cookies().set({
        name: 'access',
        value: token,
        httpOnly: true,
        path: '/',
    })
}

export default saveToken