 import Image from "next/image"
import Link from "next/link";
import latest1 from "../../../public/latestnew1.png"
import { IoIosArrowBack } from "react-icons/io"; 
import { IoIosArrowForward } from "react-icons/io";
import Header from "@/components/Header";
export default function CheckoutPage() {
  return (
    <div className="">
       <Header/>
    <section
      className="bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: "url('/allnav.png')" }}
    >
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold">Our Chef</h2>
        <p className="pt-[10px]">
          <Link href="/" className="text-yellow-400">Home</Link> › Shop
        </p>
      </div>
    </section> 
      <div className="grid gap-8 lg:grid-cols-2 container py-8 lg:px-[180px] lg:mx-[40px] px-9 my-[50px]">
       
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Choose country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Choose city"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    
                  />
                </div>
              </div>

             <div className="lg:flex gap-2">
             <div >
                <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  
                />
              </div>

              <div>
                <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  
                />
              </div>
             </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <div className="flex items-center lg:space-x-2">
              <input
                type="checkbox"
                id="sameAsShipping"
                className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                Same as shipping address
              </label>
            </div>
          </div>

          <div className="flex justify-between pt-4 gap-3" >
            <button className="py-2 border flex border-gray-300  shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12 px-3">
            <IoIosArrowBack className="text-[20px]"/><Link href={"/shoppingcart"}>Back to cart</Link>
            </button>
            <button className="px-6 py-2 flex bg-orange-500 text-white  shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12">
            Proceed to shipping <IoIosArrowForward className="text-[20px]"/>
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="p-6 rounded-lg border-2 border-gray-300 mx-[40px] h-[520px] ">
          {/* <h2 className="text-xl font-semibold mb-4">Order Summary</h2> */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <Image
                    src={latest1}
                    alt="Chicken Tikka Kebab"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Chicken Tikka Kebab</h3>
                  <p className="text-sm text-gray-500">150 gm net</p>
                  <p className="text-sm text-gray-500">{`50$`}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{`130$`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium">25%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">{`54.76$`}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{`432.65$`}</span>
            </div>
          </div>

          <button className="w-full mt-6 px-6 py-3 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            Place an order
          </button>
        </div>
      </div>
    </div>
  )
}
