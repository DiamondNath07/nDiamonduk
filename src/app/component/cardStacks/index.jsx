'use client';

import { cardContent } from '../../../app/constants';
import React from 'react';
import Button from '../button';
import { useRouter } from 'next/navigation';

const CardStacks = () => {
  const router = useRouter();

  const handleCaseStudy = (index) => {
    if (index === 1) {
      router.push(
        'https://www.figma.com/deck/SBpZq3x7SQfQiw9iSTvgx1/Talstrike-case-study-presentation?node-id=1-9674&node-type=slide&t=pnig65xOR9ug5LbA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
      );
    } else if (index === 2) {
      router.push(
        'https://www.figma.com/deck/SBpZq3x7SQfQiw9iSTvgx1/Talstrike-case-study-presentation?node-id=1-9674&node-type=slide&t=pnig65xOR9ug5LbA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
      );
    }
  };

  return (
    <div className="bg-white  w-full px-[10%] md:px-[15%] pt-[15%] md:pt-[7%] ">
      <div className="flex flex-col gap-8 ">
        {cardContent.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === 0
                ? 'bg-[#F7F8FF] shadow-md '
                : index === 1
                ? 'bg-[#E0F4FD] shadow-md  '
                : index === 2
                ? 'bg-[#ECF0FC] shadow-md'
                : 'bg-[#F3FAFD] shadow-md'
            } px-[5%] py-[5%] md:rounded-3xl rounded-xl sticky md:top-10 top-12  `}
          >
            <h1 className="text-xl md:text-4xl font-medium">
              {item.companyName}
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="max-w-[596px]">
                <h2 className="text-base font-medium md:text-2xl leading-normal md:mt-2 ">
                  {item.project}
                </h2>
                <p className="max-h-[69px] text-left font-normal text-sm overflow-hidden md:max-h-[100%] md:text-base leading-normal mt-2 md:text-justify max-w-[95%]">
                  {item.description}
                </p>
                <div className="mt-4 hidden md:block">
                  <Button
                    label="View case study"
                    onClick={() => router.push('/casestudies')}
                  />
                </div>
              </div>
              <div className="mt-4">
                <img src={item.image} alt="images" width="100%" height="100%" />
                <div className="mt-8 mb-6 md:hidden">
                  <Button
                    label="View case study"
                    text="sm"
                    px={2}
                    py={3}
                    onClick={() => router.push('/casestudies')}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStacks;
