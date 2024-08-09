/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const Review = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div>
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-8 text-center">
            Customer reviews & rating
          </h2>
          <div className="grid grid-cols-12 mb-11">
            {/* Rating Bars */}
            <div className="col-span-12 xl:col-span-4 flex items-center">
              <div className="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <div key={index} className="flex items-center w-full">
                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">{rating}</p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath={`url(#clip0_${index})`}>
                        <path fill="#FBBF24" />
                      </g>
                      <defs>
                        <clipPath id={`clip0_${index}`}>
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                      <span
                        className={`h-full ${
                          rating === 5
                            ? 'w-[30%]'
                            : rating === 4
                            ? 'w-[40%]'
                            : rating === 3
                            ? 'w-[20%]'
                            : rating === 2
                            ? 'w-[16%]'
                            : 'w-[8%]'
                        } rounded-[30px] bg-indigo-500 flex`}
                      ></span>
                    </p>
                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                      {rating * 10}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Summary */}
            <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
              <div className="grid grid-cols-12 h-full px-8 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-3xl max-xl:mx-auto">
                <div className="col-span-12 md:col-span-8 flex items-center">
                  <div className="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
                    <div className="sm:pr-3 sm:border-r border-gray-200 flex items-center justify-center flex-col">
                      <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.3</h2>
                      <div className="flex items-center gap-3 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath={`url(#clip0_star_${i})`}>
                              <path fill="#FBBF24" />
                            </g>
                            <defs>
                              <clipPath id={`clip0_star_${i}`}>
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        ))}
                      </div>
                      <p className="font-normal text-lg leading-8 text-gray-400">46 Ratings</p>
                    </div>

                    <div className="sm:pl-3 sm:border-l border-gray-200 flex items-center justify-center flex-col">
                      <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.8</h2>
                      <div className="flex items-center gap-3 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath={`url(#clip0_star_${i})`}>
                              <path fill="#FBBF24" />
                            </g>
                            <defs>
                              <clipPath id={`clip0_star_${i}`}>
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        ))}
                      </div>
                      <p className="font-normal text-lg leading-8 text-gray-400">Last Month</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 max-lg:mt-8 md:pl-8">
                  <div className="flex items-center flex-col justify-center w-full h-full ">
                    <button className="rounded-full px-6 py-4 bg-indigo-600 font-semibold text-lg text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                      Write A Review
                    </button>
                    <button className="rounded-full px-6 py-4 bg-white font-semibold text-lg text-indigo-600 whitespace-nowrap w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                      See All Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Most Helpful Positive Review */}
          <div className="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
            <h4 className="font-manrope font-semibold text-3xl leading-10 text-black mb-6">
              Most helpful positive review
            </h4>
            <div className="flex sm:items-center flex-col sm:flex-row justify-between mb-4">
              <div className="flex items-center gap-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clipPath={`url(#clip0_small_star_${i})`}>
                      <path fill="#FBBF24" />
                    </g>
                    <defs>
                      <clipPath id={`clip0_small_star_${i}`}>
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <h6 className="font-semibold text-lg leading-8 text-black">@john.doe</h6>
                <p className="font-medium text-base leading-7 text-gray-400">Nov 01, 2023</p>
              </div>
            </div>

            <p className="font-normal text-lg leading-8 text-gray-500">
              I recently had the opportunity to explore Pagedone's UI design system, and it left a lasting
              impression on my workflow. The system seamlessly blends user-friendly features with a robust set
              of design components, making it a go-to for creating visually stunning and consistent
              interfaces.
            </p>
          </div>

          {/* Sort Reviews */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 max-xl:max-w-3xl max-xl:mx-auto">
            <p className="font-normal text-lg py-[1px] text-black">46 reviews</p>
            <form>
              <div className="flex">
                <div className="relative">
                  <div className="absolute -left-0 px-2 top-0 py-2">
                    <p className="font-normal text-lg leading-8 text-gray-500">Sort by:</p>
                  </div>
                  <input
                    type="text"
                    className="block w-60 h-11 pr-4 pl-20 py-2.5 text-lg leading-8 font-medium rounded-full cursor-pointer shadow-xs text-black bg-transparent placeholder-black focus:outline-gray-200"
                    placeholder="Most Relevant"
                    onClick={toggleDropdown}
                  />
                  <div
                    id="dropdown"
                    className={`absolute top-10 right-0 bg-white border border-gray-200 rounded-xl w-full p-4 z-20 transition-all duration-200 ease-out ${
                      dropdownOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <ul>
                      <li className="py-3 px-4 text-lg text-gray-600 hover:bg-gray-100 cursor-pointer">Today</li>
                      <li className="py-3 px-4 text-lg text-gray-600 hover:bg-gray-100 cursor-pointer">Yesterday</li>
                      <li className="py-3 px-4 text-lg text-gray-600 hover:bg-gray-100 cursor-pointer">Last moth</li>
                      <li className="py-3 px-4 text-lg text-gray-600 hover:bg-gray-100 cursor-pointer">This year</li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
