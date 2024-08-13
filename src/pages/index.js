import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Login from "./login";

export default function Home() {
  return (
      <Login/>
  );
}
