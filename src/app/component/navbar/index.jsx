'use client';

import React, { useState } from 'react';
import Button from '../button';
import '../../../app/globals.css';
import { navLinks } from '../../../app/constants';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = ({ borderColor = '#929292' }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="bg-white relative border-b-[1px] w-full  h-[87px] flex items-center justify-between md:px-[15%] px-[10%]"
      style={{
        borderColor: borderColor,
      }}
    >
      <div
        className="flex flex-row md:gap-3 gap-1 cursor-pointer"
        onClick={() => router.push('/')}
      >
        <img src={'./images/myLogo.png'} alt="logo" width={25} height={25} />
        <img
          src={'./images/alertImg.png'}
          alt="logo"
          width={25}
          height={25}
          className="smooth-blinking-image"
        />
        <p className="text-[#525560]">Accepting new clients</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row list-none justify-center text-[#525560] text-base ">
          {navLinks.map((link) => (
            <li key={link.id} className="mx-2">
              <a
                className={`hover:text-[#000] cursor-pointer ${
                  pathname === link.link
                    ? 'font-semibold text-[#27282b]'
                    : 'text-[#525560]'
                }`}
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block md:cursor-pointer ">
        <Button
          label="Get in touch"
          onClick={() => router.push('mailto:diamondnicholas154@gmail.com')}
        />
      </div>
      <div
        className="md:hidden"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <Image src="/images/menu.png" alt="menu" width={25} height={25} />
      </div>
      {showModal && (
        <div className="md:hidden absolute top-0 left-0 right-0 w-screen h-screen z-20">
          <div className="bg-white w-screen h-screen relative mt-[5%] px-[10%] animate-slide-in">
            <div>
              <Image
                src="/images/close.png"
                alt="close.png"
                width={25}
                height={25}
                className="absolute right-11 top-3"
                onClick={() => {
                  setShowModal(false);
                }}
              />
              <ul className="flex flex-col pt-10 gap-10">
                {navLinks.map((link) => (
                  <li key={link.id} className="animate-fade-in">
                    <a href={link.link} className="text-[#525560]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
