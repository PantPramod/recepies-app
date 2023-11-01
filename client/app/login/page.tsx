import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LoginForm from '@/components/LoginForm';

const Login = () => {
    const cookieStore = cookies()
    const access = cookieStore.get('access')
    if (access?.value) {
        redirect('/')
    }
    return (
        <LoginForm />
    )
}

export default Login
