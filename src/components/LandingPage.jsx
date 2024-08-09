/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import image01 from '../assets/image-01.png';
import image02 from '../assets/image-02.png';
import image03 from '../assets/image-03.png';

const LandingPage = () => {
  return (
    <section className="py-10 dark:bg-dark h-[700px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div className="relative mb-8 h-[370px] md:h-[580px]">
              <img
                src={image01}
                alt="product"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                <div className="max-w-[520px]">
                  <h3>
                    <a
                    
                      className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl hover:text-blue-600"
                    >
                      Mega Sale Up To 50% Off For All
                    </a>
                  </h3>
                  <p className="mb-9 text-base text-body-color">
                  Get ready to shop till you drop with our incredible Mega Sale! Enjoy massive discounts of up to 50% off on all your favorite products. Whether you're looking for the latest fashion trends, cutting-edge electronics anything in between, we've got you covered. Shop now and take advantage of unbeatable prices before it's too late!
                  </p>
                  <a
              
                    className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white bg-black   "
                  >
                    Grab The Offer
                  </a>
                </div>
              </div>
            </div> 
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-full">
                <div className="relative mb-8 h-[273px]">
                  <img
                    src={image02}
                    alt="product"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div className="max-w-[180px] text-right">
                      <h3>
                        <a
                        
                          className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                        >
                          Summer Travel Collection
                        </a>
                      </h3>
                      <a
                       
                        className="text-base font-medium text-dark hover:text-primary"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-full">
                <div className="relative mb-8 h-[273px]">
                  <img
                    src={image03}
                    alt="product"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div className="max-w-[180px] text-right">
                      <h3>
                        <a
                         
                          className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                        >
                          Get 30% Off On iPhone
                        </a>
                      </h3>
                      <a
                      
                        className="text-base font-medium text-dark hover:text-primary"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
