'use server'

import { cookies } from 'next/headers'

export default async function delToken() {
    cookies().delete('access')
}
