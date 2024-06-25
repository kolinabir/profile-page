"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProfileEditForm from "../[components]/ProfileEditForm";
import { Menu } from "lucide-react";

const ProfilePage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative flex flex-col lg:flex-row gap-4 md:mx-36 mt-5">
      {/* Toggle button for mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-20 bg-gray-200 p-2 rounded-md"
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          flex flex-col w-64  h-screen px-4 py-8 overflow-y-auto bg-white border rounded-md
          dark:bg-gray-900 dark:border-gray-700
          lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out
          fixed inset-y-0 left-0 z-10 transform
          ${sidebarVisible ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <a href="#" className="mx-auto">
          <Image
            src="https://supecoder.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupe-logo.283b4cd0.png&w=640&q=75"
            alt=""
            width={120}
            height={28}
          />
        </a>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
              width={96}
              height={96}
              className="object-cover w-24 h-24 mx-2 rounded-full"
            />
          </div>
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
            John Doe
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            john@example.com
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <a
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
              href="#"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Edit Profile</span>
            </a>

            {/* Other navigation links */}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`flex-1  p-8 ${
          sidebarVisible ? "blur-sm lg:blur-none" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Edit Profile
            </h2>
            <ProfileEditForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
