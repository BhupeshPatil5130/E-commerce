import React from 'react';
import image from '../img/images.png';

const Footer = () => {
  return (
    <div className="pt-[70px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-4/12">
            <div className="mb-16 max-w-[270px]">
              <a className="mb-8 inline-block">
                <img src={image} alt="logo" className="max-w-full dark:hidden bg-none" />
              </a>

              <div className="space-y-4">
                <p className="flex text-base text-body-color dark:text-dark-6">
                  <span className="mt-1 pr-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"></svg>
                  </span>
                  <span>Shop 009A, Level 4, Block A, Demo Park, Ottawa</span>
                </p>
                <p className="flex items-center text-base text-body-color dark:text-dark-6">
                  <span className="pr-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"></svg>
                  </span>
                  <span>+91-985-555-0182</span>
                </p>
                <p className="flex items-center text-base text-body-color dark:text-dark-6">
                  <span className="pr-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"></svg>
                  </span>
                  <span>contact@yourmail.com</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-16">
              <h3 className="mb-9 text-2xl font-semibold text-dark dark:text-white">My Account</h3>
              <ul className="space-y-3">
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">My Profile</a>
                </li>
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">My Order History</a>
                </li>
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">Order Tracking</a>
                </li>
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">Shopping Cart</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-16">
              <h3 className="mb-9 text-2xl font-semibold text-dark dark:text-white">Shop Departments</h3>
              <ul className="space-y-3">
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">Computers & Accessories</a>
                </li>
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">Smartphones & Tablets</a>
                </li>
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">TV, Video & Audio</a>
                </li>
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">Cameras, Photo & Video</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-16">
              <h3 className="mb-9 text-2xl font-semibold text-dark dark:text-white">Customer Service</h3>
              <ul className="space-y-3">
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">FAQs</a>
                </li>
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">Returns & Exchanges</a>
                </li>
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">Shipping & Delivery</a>
                </li>
                <li>
                  <a className="inline-block text-base text-body-color hover:text-primary dark:text-dark-6">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
