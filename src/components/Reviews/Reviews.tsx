/* eslint-disable @next/next/no-img-element */
import React from "react";
import noProfilePic from "../../../public/np-pic-picture.jpg";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="flex items-center bg-gray-100 lg:h-screen ">
      <div className="p-4 mx-auto max-w-7xl">
        <div className="mb-32 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-500">
            {" "}
            Testimonials{" "}
          </h1>
          <p className="max-w-xl mx-auto text-gray-500">
            {" "}
            Hear directly from our valued clients. Their stories and experiences
            with Kwix4 speak volumes about our dedication to excellence and the
            quality we deliver with every project.
          </p>
        </div>
        <div className="flex ">
          <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="relative mb-20 text-center bg-white rounded shadow dark:bg-gray-700"
              href="#"
            >
              <div className="z-20 p-8 -mt-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute w-20 h-20 top-4 left-4 fill-orange-400 opacity-40"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <div className="relative inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white rounded-full">
                  <Image
                    className="object-cover w-full h-full transition-all hover:scale-110"
                    src={noProfilePic}
                    alt="no-reviewer-pic"
                    fill
                  />
                </div>
                <p className="mb-4 text-base leading-7 text-gray-400">
                  I was impressed how professional they were as they moved my
                  full size Snooker pool table with care and what a teamwork
                  really impressive. I would highly recommend their service to
                  anyone.
                </p>
                <h2 className="text-lg font-bold leading-9 text-orange-400">
                  Abdi
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute w-20 h-20 rotate-180 bottom-4 right-4 fill-orange-400 opacity-40"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>
            </a>
            <a
              className="relative mb-20 text-center bg-white rounded shadow dark:bg-gray-700"
              href="#"
            >
              <div className="z-20 p-8 -mt-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute w-20 h-20 top-4 left-4 fill-orange-400 opacity-40"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <div className="relative inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white rounded-full">
                  <Image
                    className="object-cover w-full h-full transition-all hover:scale-110"
                    src={noProfilePic}
                    alt="no-reviewer-pic"
                    fill
                  />
                </div>
                <p className="mb-4 text-base leading-7 text-gray-400">
                  I was worried because my table is new but they handle it
                  professionally and moved it safely with the right tools
                </p>
                <h2 className="text-lg font-bold leading-9 text-orange-400">
                  Martin
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute w-20 h-20 rotate-180 bottom-4 right-4 fill-orange-400 opacity-40"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>
            </a>
            <a
              className="relative mb-20 text-center bg-white rounded shadow dark:bg-gray-700"
              href="#"
            >
              <div className="z-20 p-8 -mt-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute w-20 h-20 top-4 left-4 fill-orange-400 opacity-40"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <div className="relative inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white rounded-full">
                  <Image
                    className="object-cover w-full h-full transition-all hover:scale-110"
                    src={noProfilePic}
                    alt="no-reviewer-pic"
                    fill
                  />
                </div>
                <p className="mb-4 text-base leading-7 text-gray-400">
                  Fantastic service. Good job overall.
                </p>
                <h2 className="text-lg font-bold leading-9 text-orange-400">
                  Abi
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute w-20 h-20 rotate-180 bottom-4 right-4 fill-orange-400 opacity-40"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
