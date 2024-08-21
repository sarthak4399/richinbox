import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginPageBar from '../components/LoginPageBar';
import Image from 'next/image';
import google from '../assets/google.svg';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Stored Token:', token); // Check if token is retrieved correctly
    if (token) {
      router.push('/onBox'); // Redirect to home if token exists
    }
  }, [router]);

  const handleGoogleLogin = () => {
    // Redirect to Google login URL
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000";
  };

  return (
    <div>
      <LoginPageBar />
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <div className="">
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div
              className="mt-6 border-white/40 border px-20 py-2 text-sm flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <Image src={google} alt="google" className="w-4 mr-3" />
              Sign Up with Google
            </div>
          </div>
          <div className="">
            <Link href="/login" className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer">
              Create an Account
            </Link>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
