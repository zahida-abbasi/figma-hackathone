import React from 'react';
import { FiMail } from 'react-icons/fi';
import { TbPhoneCall } from 'react-icons/tb';
import { FiChevronDown } from 'react-icons/fi';
import { TbUser } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import Link from 'next/link';

const DasktopTop = () => {
  const topData = [
    {
      title: "mhhasanul@gmail.com",
      icon: <FiMail />
    },
    {
      title: "(12345)67890",
      icon: <TbPhoneCall />
    },
  ];

  const userData = [
    {
      title: "English",
      icon: <FiChevronDown />
    },
    {
      title: "USD",
      icon: <FiChevronDown />
    },
    {
      title: "Login",
      icon: <TbUser />,
      link: "/myaccount" 
    },
    {
      title: "Wishlist",
      icon: <AiOutlineHeart />,
      link: "/demo"
    },
    { 
      title: "Cart",
      icon: <CgShoppingCart />,
      link: "/shoppingcart"
    
    },
  ];

  return (
    <div className='bg-purple md:p-4 p-1'>
      <div className='md:container grid grid-cols-2'>
        <div className='flex'>
          {topData.map((item, index) => {
            return (
              <div className='md:mx-6 mx-[.8rem] flex items-center mr-6 gap-4 text-white' key={index}>
                <a href="">{item.icon}</a>
                <a href="">{item.title}</a>
              </div>
            );
          })}
        </div>

        <div className='hidden lg:block'>
          <div className='flex justify-end'>
            {userData.map((item, index) => {
              return (
                <div key={index} className='mx-4 flex items-center text-white'>
                  {item.link ? (
                    // Link usage for the login item
                    <Link href={item.link} passHref>
                      <div className="flex items-center cursor-pointer">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center">
                      <a href="">{item.title}</a>
                      <a href="">{item.icon}</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasktopTop;
