'use client';

import Image from 'next/image';
import React from 'react';
import { metricsData, projectCards } from '../../constants';
import MetricsButton from '../../component/button/MetricsButton';
import Button from '../button';
import { useRouter } from 'next/navigation';

const CaseStudyCard = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 mb-[10%]">
      {projectCards.map((item, index) => (
        <div key={item.id} className="mt-[5%] pb-8 bg-white shadow-lg">
          <Image src={item.images} alt="images" width={422} height={317} />
          <div className="px-[3%] mt-[5%]">
            <h2 className="text-xl font-medium">{item.company}</h2>
            <div className="flex items-center justify-between mt-6">
              {item.metricsData.map((metric, index) => (
                <MetricsButton
                  key={index}
                  src={metric.icon}
                  count={metric.count}
                  description={metric.description}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 w-full flex justify-center items-center px-[3%]">
            {index === 2 ? (
              <button
                onClick={() => router.push(item.link)}
                className="capitalize bg-[#1D2130] hover:bg-[#525560] text-white  px-8 py-3 rounded-md cursor-pointer w-full"
              >
                view live project
              </button>
            ) : (
              <button
                onClick={() => router.push(item.link)}
                className="capitalize bg-[#1D2130] hover:bg-[#525560] text-white  px-8 py-3 rounded-md cursor-pointer w-full"
              >
                view case study
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyCard;
