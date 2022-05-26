import { useRouter } from 'next/router';
import useLogin from 'src/hooks/useLogin';
import { useEffect } from 'react';

const Dashboard = () => {

  const { auth } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (auth()) router.push('/admin/login');
  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard