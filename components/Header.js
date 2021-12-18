import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../contexts/auth";
import LoginModal from "./sub_components/LoginModal";
import SignUpModal from "./sub_components/SignupModal";


export default function Header() {
  let { user, login, logout,signup } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("Auth"))
  }
  const showLoginModal = () => {
    setShowLogin(true);
  };
  const hideLoginModal = () => {
    setShowLogin(false);
  };
  const showSignUpModal = () => {
    setShowSignUp(true);
  };
  const hideSignUpModal = () => {
    setShowSignUp(false);
  };

  if(showLogin)
  {
    return <>{showLogin && <LoginModal hide={hideLoginModal} login={login} />}</>
  }
  else if(showSignUp)
  {
    return <>{showSignUp && <SignUpModal hide={hideSignUpModal} showlogin={showLoginModal} signup={signup} />}</>
  }
  else{
  return (
    <>
      <header className="">
        <nav className="fixed inset-x-0 z-40 bg-gray-100">
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  {" "}
                  <a
                    href="#"
                    className="flex items-center px-2 py-5 text-gray-700 hover:text-gray-900"
                  >
                    {" "}
                    <i className="mb-1 mr-1 text-xl text-blue-400 bx bxl-medium-old"></i>{" "}
                    <Link href="/"><a href="#" className="font-bold text-grey-300">AI Medica</a></Link>
                  </a>{" "}
                </div>
                <div className="items-center hidden space-x-1 md:flex">
                  {" "}
                  <Link href="/">
                    <a className="px-3 py-5 text-gray-700 hover:text-gray-900">
                      Home
                    </a>
                  </Link>
                  {user && (
                    <>
                      <Link href="/discover">
                        <a
                          href="#"
                          className="px-3 py-5 text-gray-700 hover:text-gray-900"
                        >
                          Discover
                        </a>
                      </Link>
                      <Link href="/result">
                        <a
                          href="#"
                          className="px-3 py-5 text-gray-700 hover:text-gray-900"
                        >
                          Results
                        </a>
                      </Link>
                      <Link href="/helpothers">
                        <a
                          href="#"
                          className="px-3 py-5 text-gray-700 hover:text-gray-900"
                        >
                          Help Others
                        </a>
                      </Link>
                    </>
                  )}
                  <Link href="/aboutus">
                    <a
                      href="#"
                      className="px-3 py-5 text-gray-700 hover:text-gray-900"
                    >
                      About Us
                    </a>
                  </Link>
                </div>
              </div>
              <div className="items-center hidden space-x-1 md:flex">
                {user ? (
                  <button
                    className="px-3 py-2 text-sm text-black transition duration-300 rounded bg-lime-400 hover:bg-lime-300 hover:text-yellow-800"
                    onClick={logout}
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button onClick={showLoginModal}>Login</button>
                    <button
                      className="px-3 py-2 text-sm text-black transition duration-300 rounded bg-lime-400 hover:bg-lime-300 hover:text-yellow-800"
                      onClick={showSignUpModal}
                    >
                      Signup
                    </button>
                  </>
                )}
              </div>
              <div className="flex items-center md:hidden">
                {" "}
                <button className="mobile-menu-button focus:outline-none">
                  {" "}
                  <i className="mt-1 text-3xl bx bx-menu"></i>{" "}
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="hidden mobile-menu md:hidden">
            {" "}
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
              Home
            </a>{" "}
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
              Contact
            </a>{" "}
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
              Pricing
            </a>{" "}
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
              Features
            </a>{" "}
          </div>
        </nav>
      </header>
    </>
  );
  }
}
