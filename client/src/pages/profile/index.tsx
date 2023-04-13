import { useState, useEffect } from "react";
import axios from "axios";
import { NextPage } from "next";

const Profile: NextPage = () => {
  const user = {
    username: "yigal amir",
    postsNum: "136",
    followersNum: "40.5k",
    followingNum: "302",
    descriptionHead: "A famous killer",
    description1: "Travel, Nature and Music",
    description2: "I hate arabs",
    images: [
      "https://ibasketball.co.il/wp-content/uploads/2020/11/S142283-109x128.jpg",
      "https://ibasketball.co.il/wp-content/uploads/2020/11/S142283-109x128.jpg",
      "https://ibasketball.co.il/wp-content/uploads/2020/11/S142283-109x128.jpg",
    ],
  };

  return (
    <div className="flex justify-center">
      <main className="bg-base-300 bg-opacity-25 w-6/12 h-screen">
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-base-content p-1"
                src="https://ibasketball.co.il/wp-content/uploads/2020/11/S142283-109x128.jpg"
                alt="profile"
              ></img>
            </div>

            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {user.username}
                </h2>
              </div>

              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold">{user.postsNum} </span>
                  posts
                </li>

                <li>
                  <span className="font-semibold">{user.followersNum} </span>
                  followers
                </li>
                <li>
                  <span className="font-semibold">{user.followingNum} </span>
                  following
                </li>
              </ul>

              <div className="hidden md:block">
                <h1 className="font-semibold">{user.descriptionHead}</h1>
                <span>{user.description1}</span>
                <p>{user.description2}</p>
              </div>
            </div>
          </header>
        </div>
        <hr className="h-px my-8 bg-base-content border-0"></hr>
        <div className="flex">
          {user.images.map((image) => {return <img
            className="rounded-lg w-4/12 h-auto mx-3"
            src={image}
            alt="image description"
          ></img>})}
        </div>
      </main>
    </div>
  );
};

export default Profile;
