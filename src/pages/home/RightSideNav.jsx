import React from "react";
import qZoneImage1 from "../../assets/images/qZone1.png";
import qZoneImage2 from "../../assets/images/qZone2.png";
import qZoneImage3 from "../../assets/images/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="sticky top-5">
      {/* login with */}
      <div>
        <h2 className="mb-3 font-bold text-lg">Login With</h2>
        <div className="px-6 sm:px-0 max-w-sm gap-3">
          <button
            type="button"
            className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Login with Google<div></div>
          </button>
        </div>
        <button
          type="button"
          className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 1792 1792"
          >
            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
          </svg>
          Sign in with GitHub
        </button>
      </div>
      {/* find us on */}
      <div className="mt-8 ">
        <h2 className="mb-3 font-bold text-lg">Login With</h2>
        <div className="space-y-2 border-2 p-2 ">
          <div className="flex gap-4 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <rect width="30" height="30" rx="15" fill="#F3F3F3" />
              <path
                d="M18.2586 16.2051L18.6472 13.6456H16.2158V11.9854C16.2158 11.2851 16.5548 10.6019 17.6438 10.6019H18.75V8.42294C18.75 8.42294 17.7466 8.25 16.7877 8.25C14.7843 8.25 13.476 9.47611 13.476 11.6949V13.6456H11.25V16.2051H13.476V22.3928C13.9229 22.4637 14.3801 22.5 14.8459 22.5C15.3117 22.5 15.7689 22.4637 16.2158 22.3928V16.2051H18.2586Z"
                fill="#3B599C"
              />
            </svg>
            <h3 className="text-[#706F6F] text-base font-semibold">facebook</h3>
          </div>
          <div className="flex gap-4 p-4 border-t-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <rect width="30" height="30" rx="15" fill="#F3F3F3" />
              <path
                d="M12.7228 20.25C11.0765 20.25 9.54175 19.8205 8.25 19.0793C9.34674 19.143 11.2822 18.9905 12.4861 17.9604C10.6751 17.8859 9.85835 16.64 9.75182 16.1075C9.90569 16.1608 10.6396 16.2246 11.0539 16.0756C8.97059 15.607 8.651 13.967 8.72202 13.4665C9.11263 13.7115 9.77549 13.7967 10.0359 13.7754C8.09467 12.5294 8.79304 10.6552 9.13631 10.2505C10.5294 11.9818 12.6172 12.9541 15.2001 13.0082C15.1514 12.8166 15.1257 12.6171 15.1257 12.4123C15.1257 10.9419 16.4506 9.75 18.0849 9.75C18.9388 9.75 19.7082 10.0754 20.2483 10.5959C20.819 10.4759 21.6777 10.1951 22.0976 9.95233C21.8859 10.6339 21.2271 11.2024 20.8286 11.4131C20.8254 11.4059 20.8319 11.4203 20.8286 11.4131C21.1787 11.3656 22.1258 11.2024 22.5 10.9746C22.315 11.3575 21.6165 11.9941 21.0433 12.3505C21.1499 16.5695 17.5514 20.25 12.7228 20.25Z"
                fill="#58A7DE"
              />
            </svg>
            <h3 className="text-[#706F6F] text-base font-semibold">Twitter</h3>
          </div>
          <div className="flex gap-4 p-4 border-t-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <rect width="30" height="30" rx="15" fill="#F3F3F3" />
              <path
                d="M20.3625 11.4562C20.3625 12.0465 19.884 12.525 19.2937 12.525C18.7035 12.525 18.225 12.0465 18.225 11.4562C18.225 10.866 18.7035 10.3875 19.2937 10.3875C19.884 10.3875 20.3625 10.866 20.3625 11.4562Z"
                fill="url(#paint0_linear_0_148)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.375 18.9375C17.3425 18.9375 18.9375 17.3425 18.9375 15.375C18.9375 13.4075 17.3425 11.8125 15.375 11.8125C13.4075 11.8125 11.8125 13.4075 11.8125 15.375C11.8125 17.3425 13.4075 18.9375 15.375 18.9375ZM15.375 17.5125C16.5555 17.5125 17.5125 16.5555 17.5125 15.375C17.5125 14.1945 16.5555 13.2375 15.375 13.2375C14.1945 13.2375 13.2375 14.1945 13.2375 15.375C13.2375 16.5555 14.1945 17.5125 15.375 17.5125Z"
                fill="url(#paint1_linear_0_148)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 15.09C8.25 12.6958 8.25 11.4987 8.71595 10.5842C9.12581 9.7798 9.7798 9.12581 10.5842 8.71595C11.4987 8.25 12.6958 8.25 15.09 8.25H15.66C18.0542 8.25 19.2513 8.25 20.1658 8.71595C20.9702 9.12581 21.6242 9.7798 22.0341 10.5842C22.5 11.4987 22.5 12.6958 22.5 15.09V15.66C22.5 18.0542 22.5 19.2513 22.0341 20.1658C21.6242 20.9702 20.9702 21.6242 20.1658 22.0341C19.2513 22.5 18.0542 22.5 15.66 22.5H15.09C12.6958 22.5 11.4987 22.5 10.5842 22.0341C9.7798 21.6242 9.12581 20.9702 8.71595 20.1658C8.25 19.2513 8.25 18.0542 8.25 15.66V15.09ZM15.09 9.675H15.66C16.8806 9.675 17.7104 9.67611 18.3518 9.72851C18.9765 9.77955 19.296 9.87207 19.5189 9.98563C20.0551 10.2589 20.4911 10.6949 20.7644 11.2311C20.8779 11.454 20.9704 11.7735 21.0215 12.3982C21.0739 13.0396 21.075 13.8694 21.075 15.09V15.66C21.075 16.8806 21.0739 17.7104 21.0215 18.3518C20.9704 18.9765 20.8779 19.296 20.7644 19.5189C20.4911 20.0551 20.0551 20.4911 19.5189 20.7644C19.296 20.8779 18.9765 20.9704 18.3518 21.0215C17.7104 21.0739 16.8806 21.075 15.66 21.075H15.09C13.8694 21.075 13.0396 21.0739 12.3982 21.0215C11.7735 20.9704 11.454 20.8779 11.2311 20.7644C10.6949 20.4911 10.2589 20.0551 9.98563 19.5189C9.87207 19.296 9.77955 18.9765 9.72851 18.3518C9.67611 17.7104 9.675 16.8806 9.675 15.66V15.09C9.675 13.8694 9.67611 13.0396 9.72851 12.3982C9.77955 11.7735 9.87207 11.454 9.98563 11.2311C10.2589 10.6949 10.6949 10.2589 11.2311 9.98563C11.454 9.87207 11.7735 9.77955 12.3982 9.72851C13.0396 9.67611 13.8694 9.675 15.09 9.675Z"
                fill="url(#paint2_linear_0_148)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_148"
                  x1="15.375"
                  y1="8.25"
                  x2="15.375"
                  y2="22.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0625" stopColor="#D82D7E" />
                  <stop offset="1" stopColor="#FBA756" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_148"
                  x1="15.375"
                  y1="8.25"
                  x2="15.375"
                  y2="22.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0625" stopColor="#D82D7E" />
                  <stop offset="1" stopColor="#FBA756" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_148"
                  x1="15.375"
                  y1="8.25"
                  x2="15.375"
                  y2="22.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0625" stopColor="#D82D7E" />
                  <stop offset="1" stopColor="#FBA756" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="text-[#706F6F] text-base font-semibold">
              Instagram
            </h3>
          </div>
        </div>
      </div>
      {/* Q Zone */}
      <div className="mt-8 bg-[#F3F3F3] p-3 ">
        <h2 className="mb-3 font-bold text-lg">Q Zone</h2>
        <div>
          <img src={qZoneImage1} alt="" />
          <img src={qZoneImage2} alt="" />
          <img src={qZoneImage3} alt="" />
        </div>
      </div>
      {/* create an amazing newspaper */}
      <div className="bg-[#05001DCC] text-white text-center space-y-4 p-8">
        <h2 className="font-bold text-3xl">Create an Amazing Newspaper</h2>
        <p className="text-base leading-7">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="bg-[#D72050] btn text-white border-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
