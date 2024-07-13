import React from "react";

function Home() {
  return (
    <>
      <form>
        <h1>Your Login Details</h1>
        {/* First Name */}
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            FirstName
            <div className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
              {localStorage.getItem("firstname")}
            </div>
          </label>
        </div>
        {/* LastName */}
        <div>
          <label
            htmlFor="LastName"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            LastName
            <div className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
              {localStorage.getItem("lastname")}
            </div>
          </label>
        </div>
        {/* Mobile NUmber */}
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            mobile
          </label>
          <div className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
            {localStorage.getItem("mobile")}
          </div>
        </div>
        {/* email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Email Address
          </label>
          <div className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
            {localStorage.getItem("email")}
          </div>
        </div>
        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Password
          </label>
          <div className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
            {localStorage.getItem("password")}
          </div>
        </div>
        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmpassword"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Confirm Password
          </label>
          <div className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
            {localStorage.getItem("confirmpassword")}
          </div>
        </div>
        {/* Radio Button */}
        <div>
          <label
            htmlFor="radiobutton"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            radiobutton
            <div className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
              {localStorage.getItem("radiobutton")}
            </div>
          </label>
        </div>
        {/* Checkbox Button */}
        <div>
          <label
            htmlFor="checkboxbutton"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            checkboxbutton
            <div className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
              {localStorage.getItem("checkboxbutton")}
            </div>
          </label>
        </div>
      </form>
    </>
  );
}

export default Home;
