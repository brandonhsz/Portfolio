import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken'
import DashBoardIndex from 'src/components/admin/dashboard/Index';

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
    <DashBoardIndex />
  )
}

export default Dashboard