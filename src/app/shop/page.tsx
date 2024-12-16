import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Header from '@/components/Header';
const page = () => {
  return (
    <div>
     <Header/>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">Home</Link> › Shop
          </p>
        </div>
      </section> 
      <div className='mt-[100px] mb-[100px] px:6 lg:px-[120px]'>
        <div className='lg:flex gap-4 '>
        <div className='flex w-[332px h-[46px] '>
            <h1 className=''>Sort by : </h1>
            <h1 className='flex justify-between px-[50px] w-[236px] h-[40px] border py-2 text-gray-500'> Newest <IoIosArrowDown className='pt-[5px] text-xl'/></h1>
        </div>
        <div className='flex w-[332px h-[46px] '>
            <h1 className=''>Show : </h1>
            <h1 className='flex justify-between px-[50px] w-[236px] h-[40px] border py-2 text-gray-500'> Default <IoIosArrowDown className='pt-[5px] text-xl'/></h1>
        </div>
        </div>
      <div className='mt-[20px] mb-[20px] lg:px-[120px]'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 lg:mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"  className="object-cover object-center w-full h-full block"  src="/about1.png" width={200} height={200}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Fresh Lime
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/ourmenu2.png" width={200} height={200}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Chocolate Muffine
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/about2.png" width={200} height={200}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/latestnew1.png" width={200} height={200} 
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            burger
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/whyus6.png" width={200} height={200}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Chicken chup
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/recentpost1.png" width={200} height={200}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Pizza
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/ourmenu6.png" width={200} height={200}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Juice
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/fries.png" width={200} height={200}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Salat
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>

      </div>
    </div>
  )
}

export default page
