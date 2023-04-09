import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComponent from "../components/navbar";
import SidebarComponent from "../components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
    </div>
  );
}
