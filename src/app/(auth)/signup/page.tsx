'use client';

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

interface Data {
  username: string;
  email: string;
  password: string;
}

const Page: React.FC = () => {

  const [data , setData] = useState<Data>({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="h-full w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-8 md:mt-0">
      <div className="md:min-w-[500px] sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign up
        </h2>
        <p className="text-center text-md text-gray-600 max-w">
          or
          <br />
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            already have an account? Sign in
          </Link>
        </p>
      </div>

      <div className="md:min-w-[500px] sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-8 px-4 sm:rounded-lg sm:px-10 shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-md font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  onChange={(e) => setData({...data, username: e.target.value})}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-md"
                  placeholder="Enter your username"
                />
              </div>
            </div>

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
                  onChange={(e) => setData({...data, email: e.target.value})}
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
                  onChange={(e) => setData({...data, password: e.target.value})}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-md"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
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
                <a
                  href="#"
                  className="facebook-btn w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-md font-medium text-gray-700 bg-white"
                >
                  <Image
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="twitter-btn w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-md font-medium text-gray-700 bg-white"
                >
                  <Image
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="google-btn w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-md font-medium text-gray-700 bg-white"
                >
                  <Image
                    width={20}
                    height={20}
                    className="h-6 w-6"
                    src="https://www.svgrepo.com/show/506498/google.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
