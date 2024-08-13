import React from "react";
import GoogleLogo from "../Assets/google.svg";
import { useEffect } from "react";
import Image from "next/image";
const LoginPage = () => {
  const google_api_login = () => {
    // Correctly set the redirect URL
    const redirectUrl = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/onBox';

    // Redirect directly to Google sign-in URL
    window.location.href = redirectUrl;

  };

  return (
    <div className="flex w-full h-screen items-center justify-center bg-[#121212]">
      <div className="flex flex-col w-[460px] h-auto items-center bg-gradient-to-l from-[#111214] to-[#121212] border border-[#343A40] rounded-md p-6 gap-4">
        <h1 className="text-white text-lg font-semibold">Create a new account</h1>
        
        <button 
          className="flex items-center justify-center w-full h-[48px] border border-[#707172] rounded cursor-pointer hover:bg-[#1a1a1a] gap-2"
          onClick={google_api_login} // Call function on click
        >
          {/* <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5" /> */}
          <Image src={GoogleLogo} alt="Google Logo" className="w-5 h-5" />
          <span className="text-white font-medium">Sign Up with Google</span>
        </button>
        
        <button 
          className="w-[195px] h-[48px] bg-gradient-to-r from-[#4B63DD] to-[#0524BF] text-white rounded-md font-semibold"
          onClick={google_api_login} // Call function on click
        >
          Create an Account
        </button>
        
        <p className="text-sm text-[#707172]">
          Already have an account?{" "}
          <a href="/login" className="text-[#007BFF] hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
