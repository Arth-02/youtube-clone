'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-center mt-5 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="text-center text-md text-gray-600 max-w">
          or
          <br />
          <Link href="/signup" className="font-medium text-blue-600 hover:underline">
            create an account
          </Link>
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-8 px-4 sm:rounded-lg sm:px-10 shadow-lg">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-md"
                  placeholder="Enter your email address"
                />
              </div>
            </div>  

            <div>
              <label
                htmlFor="password"
                className="block text-md font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-md"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-md text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-md">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-md">
                <span className="px-2 bg-background">or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <button
                  className="facebook-btn w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-md font-medium text-gray-700 bg-white"
                >
                  <Image
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button
                  className="twitter-btn w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-md font-medium text-gray-700 bg-white"
                >
                  <Image
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => signIn("google" , {callbackUrl: "http://localhost:3000"})}
                  className="google-btn w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-md font-medium text-gray-700 bg-white"
                >
                  <Image
                    width={20}
                    height={20}
                    className="h-6 w-6"
                    src="https://www.svgrepo.com/show/506498/google.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
