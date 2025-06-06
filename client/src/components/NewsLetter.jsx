import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-[40px] font-semibold">Stay In the Know</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">
            Subscribe to get exclusive hotel deals, travel tips, and the latest StayIn updates straight to your inbox.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full max-w-xl">
          <input
            type="email"
            className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none w-full"
            placeholder="Enter your email address"
          />
          <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
            Subscribe
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </button>
        </div>
        <p className="text-gray-500 mt-6 text-xs text-center">
          By subscribing, you agree to our <span className="underline">Privacy Policy</span> and consent to receive hotel updates and offers.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
