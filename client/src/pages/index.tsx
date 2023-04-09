import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComponent from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <NavbarComponent></NavbarComponent>;
}
