import React, { Component, useState } from "react";
import Link from "next/link";
import { useAuth } from "../contexts/auth";
import LoginModal from "./sub_components/LoginModal";
import SignUpModal from "./sub_components/SignupModal";

export default function Header() {
  const { user, login, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

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

  return (
    <>
      {showLogin && <LoginModal hide={hideLoginModal} login={login}/>}
      {showSignUp && <SignUpModal hide={hideSignUpModal} />}
      <header class="z-40">
        <nav class="bg-gray-100 fixed inset-x-0">
          <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
              <div class="flex space-x-4">
                <div>
                  {" "}
                  <a
                    href="#"
                    class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                  >
                    {" "}
                    <i class="bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400"></i>{" "}
                    <span class="font-bold text-grey-300">AI Medica</span>{" "}
                  </a>{" "}
                </div>
                <div class="hidden md:flex items-center space-x-1">
                  {" "}
                  <Link href="/">
                    <a class="py-5 px-3 text-gray-700 hover:text-gray-900">
                      Home
                    </a>
                  </Link>
                  {user && (
                    <>
                      <Link href="/discover">
                        <a
                          href="#"
                          class="py-5 px-3 text-gray-700 hover:text-gray-900"
                        >
                          Discover
                        </a>
                      </Link>
                      <Link href="/result">
                        <a
                          href="#"
                          class="py-5 px-3 text-gray-700 hover:text-gray-900"
                        >
                          Results
                        </a>
                      </Link>
                      <Link href="/helpothers">
                        <a
                          href="#"
                          class="py-5 px-3 text-gray-700 hover:text-gray-900"
                        >
                          Help Others
                        </a>
                      </Link>
                    </>
                  )}
                  <Link href="/aboutus">
                    <a
                      href="#"
                      class="py-5 px-3 text-gray-700 hover:text-gray-900"
                    >
                      About Us
                    </a>
                  </Link>
                </div>
              </div>
              <div class="hidden md:flex items-center space-x-1">
                {user ? (
                  <h1>logout</h1>
                ) : (
                  <>
                    <button onClick={showLoginModal}>Login</button>
                    <button
                      onClick={showSignUpModal}
                      class="py-2 px-3 bg-lime-400 text-black hover:bg-lime-300 text-sm hover:text-yellow-800 rounded transition duration-300"
                    >
                      Signup
                    </button>
                  </>
                )}
              </div>
              <div class="md:hidden flex items-center">
                {" "}
                <button class="mobile-menu-button focus:outline-none">
                  {" "}
                  <i class="bx bx-menu text-3xl mt-1"></i>{" "}
                </button>{" "}
              </div>
            </div>
          </div>
          <div class="mobile-menu hidden md:hidden">
            {" "}
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
              Home
            </a>{" "}
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
              Contact
            </a>{" "}
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
              Pricing
            </a>{" "}
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
              Features
            </a>{" "}
          </div>
        </nav>
      </header>
    </>
  );
}
