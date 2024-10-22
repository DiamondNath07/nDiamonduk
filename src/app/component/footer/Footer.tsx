'use client';
import Image from 'next/image';
import React from 'react';
import Button from '../button';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundImage: `url(./images/footerBG.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      <div className=" pt-[3%] px-[15%] pb-[20%] md:pb-[5%] ">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:justify-between">
          <div className="md:w-[50%]">
            <div className="md:max-w-[80%] flex flex-col  items-center md:items-start justify-center md:justify-start mt-6 md:mt-0">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/myLogo.png"
                  alt="logo"
                  width={25}
                  height={25}
                />
                <h3 className="text-black ">Nicholas D.</h3>
              </div>
              <h2 className="text-2xl  md:text-3xl font-bold text-center md:text-left leading-tight md:leading-normal mt-[2%] ">
                Just a click away from transforming your ideas to visible
                realities
              </h2>
              <div className=" mt-[8%] md:mt-[4%]">
                <Button
                  label="Get in touch"
                  onClick={() =>
                    router.push('mailto:diamondnicholas154@gmail.com')
                  }
                  width="w-[100%]"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:justify-between">
              <div className="mt-[5%] md:mt-0">
                <h3 className="text-base text-black font-medium">
                  Case studies
                </h3>
                <ul className="flex flex-col text-center md:text-left mt-[2%] font-normal leading-normal text-sm gap-2">
                  <li>
                    <a href="/casestudies">Talstrike</a>
                  </li>
                  <li>
                    <a href="/casestudies">SwiftPoint</a>
                  </li>
                </ul>
              </div>
              {/* <div className="mt-[20%] md:mt-0">
                <h3 className="text-base text-black font-medium">
                  Social links
                </h3>
                <ul className="flex flex-col mt-[2%] font-normal leading-normal text-sm text-center md:text-left">
                  <li>
                    <a href="/linkedin.com">Linkedin</a>
                  </li>
                </ul>
              </div> */}
              <div className="mt-[20%] md:mt-0 flex flex-col items-center justify-center md:justify-start md:items-start ">
                <h3 className="text-base text-black font-medium">Contact</h3>
                <ul className="flex flex-col mt-[2%] font-normal leading-normal text-sm">
                  <li>diamondnicholas011@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
