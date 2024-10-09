// src/app/page.tsx

import Image from 'next/image';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className="bg-slate-500 min-h-screen flex flex-col items-center p-6 md:p-10">
      {/* Responsive Heading */}
      <h1 className="text-white text-3xl md:text-4xl mb-6 md:mb-10 font-serif font-bold hover:text-black">ID Cards</h1>

      {/* First Card */}
      <div className="group mb-6 md:mb-10 w-full max-w-xs md:max-w-sm">
        <div className="p-4 md:p-6 bg-black rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <Image
              className="h-36 w-32 rounded-lg object-cover group-hover:hidden"
              src="/blk1.png"
              alt="Tailwind CSS Logo"
              width={128}
              height={144}
            />
            <Image
              className="h-36 w-32 rounded-lg object-cover hidden group-hover:block"
              src="/blk2.png"
              alt="Alternate Tailwind CSS Logo"
              width={128}
              height={144}
            />
          </div>
          <div>
            <div className="font-bold text-lg md:text-xl text-white font-serif hover:text-green-400">
              Tailwind CSS
              <p className="text-white text-sm md:text-base font-serif hover:text-blue-400">By Azmat Ali</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="group mb-6 md:mb-10 w-full max-w-xs md:max-w-sm">
        <div className="p-4 md:p-6 bg-black rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <div className="font-bold text-lg md:text-xl text-white font-serif hover:text-green-400">
              John & John
              <p className="text-white text-sm md:text-base font-serif hover:text-blue-400">By Azmat Ali</p>
            </div>
          </div>
          <div>
            <Image
              className="h-36 w-32 rounded-lg object-cover group-hover:hidden"
              src="/blk6.png"
              alt="John & John Image"
              width={128}
              height={144}
            />
            <Image
              className="h-36 w-32 rounded-lg object-cover hidden group-hover:block"
              src="/blk7.png"
              alt="Alternate Image for John & John"
              width={128}
              height={144}
            />
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="mb-6 md:mb-10 w-full max-w-xs md:max-w-sm">
        <div className="p-4 md:p-6 bg-black rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <div className="font-bold text-lg md:text-xl text-white font-serif hover:text-green-400">
              GIAIC Card
              <br />
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">Name: Adam Arnold</p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">Roll No: 1234567</p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">City: Karachi</p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">Campus: Gov. House</p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">Day: Wednesday</p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">Time: 07 pm</p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">Distance Learning: No</p>
            </div>
          </div>
          <div>
            <Image
              className="h-36 w-32 rounded-lg"
              src="/blk8.png"
              alt="GIAIC Card Image"
              width={128}
              height={144}
            />
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="w-full max-w-xs md:max-w-sm">
        <div className="p-4 md:p-6 bg-black rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <div className="font-bold text-lg md:text-xl text-white font-serif hover:text-green-400">
              GIAIC Card
              <br />
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">Governor Sindh: </p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">Kamran Khan Tissory </p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">Initiative for: </p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">1-Artificial Intelligence </p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">2-Web 3.0 </p>
              <p className="text-white text-xs md:text-sm font-serif hover:text-blue-400">3-Meta Verse </p>
              <p className="text-white text-3xl font-serif hover:text-blue-400">Q2</p>
            </div>
          </div>
          <div>
            <Image
              className="h-36 w-32 rounded-lg"
              src="/qrc1.png"
              alt="Image of GIAIC Card"
              width={128}
              height={144}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
