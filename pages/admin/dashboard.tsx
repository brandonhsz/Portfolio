import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken'

const Dashboard = () => {
  const router = useRouter();

  const token = localStorage.getItem('token')

  if (!token) {
    router.push('/admin/login')
  } else {
    try {
      jwt.verify(token, process.env.NEXT_PUBLIC_SECRET)
    } catch (e) {
      router.push('/admin/login')
    }
  }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard