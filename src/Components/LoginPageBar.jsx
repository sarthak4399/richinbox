import Image from 'next/image';
import logoSrc from '../Assets/mail_icon.png'; // Ensure this path is correct

const LoginPageBar = () => {
  return (
    <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
      <div className="">
        <Image
          src={logoSrc}
          alt="logo"
          className="h-10"
          width={40} // Adjust width as needed
          height={40} // Adjust height as needed
        />
      </div>
    </div>
  );
};

export default LoginPageBar;
