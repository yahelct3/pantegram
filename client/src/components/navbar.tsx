import { Navbar } from "react-daisyui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NavbarComponent() {
  const defaultImg =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
            <li>
              <Link href="/">
                <FontAwesomeIcon icon={faHouse} className="text-lg" /> Homepage
              </Link>
            </li>
            <li>
              <Link href="/compiler"> <FontAwesomeIcon icon={faComputer} className="text-lg" /> Compiler</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={defaultImg} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Pantegram</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <button className="btn btn-ghost btn-circle">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
            </button>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-96"
          >
            <li>
              <a className="justify-between">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full max-w-xs"
                />
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FontAwesomeIcon icon={faBell} className="text-lg" />

            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
