import { Divider } from "react-daisyui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Post() {
  const defaultImg =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

  return (
    <div className="flex flex-col rounded-xl bg-base-300 my-3 p-4">
      <div className="flex">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={defaultImg} />
          </div>
        </div>
        <div className="text-2xl m-2">User</div>
      </div>
      <span className="text-lg py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </span>
      <Divider></Divider>
      <div className="flex justify-between pb-2">
        <div className="">
          <button className="">
            <FontAwesomeIcon icon={faHeart} /> 0
          </button>
        </div>
        <div className="text-accent">01-22-2018</div>
      </div>
    </div>
  );
}
