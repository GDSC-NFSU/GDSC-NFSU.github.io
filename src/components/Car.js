import React from "react";
import event1 from "../images/event1.webp";
import event2 from "../images/event2.jpg";
export default function Car() {
  return (
    <div className="">
      <div id="default-carousel" className="relative" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Item 1 */}
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-national-forensic-sciences-university-gandhinagar-presents-git-github-hands-on-bootcamp-1/">
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src={event1}
                className="absolute blur-sm hover:blur-md block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <span className="absolute text-3xl  md:text-5xl lg:text-7xl tracking-wide font-bold text-[#EA4335] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                Introduction To Git..
              </span>
            </div>
          </a>
          {/* Item 2 */}
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-national-forensic-sciences-university-gandhinagar-presents-introduction-to-gdsc-national-forensic-sciences-university-gandhinagar/">
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src={event2}
                className="absolute blur-sm hover:blur-md block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <span className="absolute text-3xl  md:text-5xl lg:text-7xl tracking-wide font-bold text-[#4285F4] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                Birth of Our Club..
              </span>
            </div>
          </a>
          {/* end of iteams */}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
