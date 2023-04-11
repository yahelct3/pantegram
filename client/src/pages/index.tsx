import Image from "next/image";
import { Inter } from "next/font/google";
import Post from "@/components/post";

import React from "react";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className="grow">
      <div className="flex justify-around">
        <div className="grow"></div>
        <div className="flex flex-col w-1/2">
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div className="grow"></div>
      </div>
    </div>
  );
};

export default Home;
