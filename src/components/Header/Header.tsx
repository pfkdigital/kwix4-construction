import Link from "next/link";
import React, {useEffect, useState} from "react";
import {FaAngleDown} from "react-icons/fa";
import {motion} from 'framer-motion';
import Image from "next/image"
import logo from "@/../public/logo-image.webp"

export const Header = () => {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        if (window.innerWidth > 768) {
            setShouldAnimate(true);
        }

        const handleResize = () => {
            if (window.innerWidth > 768) {
                setShouldAnimate(true);
            } else {
                setShouldAnimate(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const fadeIn = {
        hidden: {opacity: 0, x: "-200px"},
        visible: {opacity: 1, x: 0}
    };

    const fadeInSub = {
        hidden: {opacity: 0, x: "200px"},
        visible: {opacity: 1, x: 0}
    };

    const fadeInButton = {
        hidden: {opacity: 0, y: "200px"},
        visible: {opacity: 1, y: 0}
    };

    const fadeInScroll = {
        hidden: {opacity: 0,},
        visible: {opacity: 1, delay: "0.7"}
    };

    const fadeInImage = {
        hidden: {opacity: 0,},
        visible: {opacity: 1, delay: "0.7"}
    };

    return (
        <section className="shadow-sm font-poppins dark:bg-gray-900">
            <div className="relative flex items-start justify-center w-full h-screen text-center">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80"></div>
                <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <motion.div initial={shouldAnimate ? "hidden" : {}}
                                    animate={shouldAnimate ? "visible" : {}}
                                    transition={{duration: 0.6, type: "spring"}}
                                    variants={fadeInImage}>
                            <Image
                                src={logo}
                                quality={100}
                                height={350}
                                width={350}
                                priority={true}
                                alt="Background logo"
                                className="mx-auto clip-logo"
                            />
                        </motion.div>
                        <motion.h1
                            className="mb-10 text-4xl font-bold leading-10 tracking-tight text-gray-50 md:text-6xl"
                            initial={shouldAnimate ? "hidden" : {}}
                            animate={shouldAnimate ? "visible" : {}}
                            transition={{duration: 0.8, type: "spring"}}
                            variants={fadeIn}>
                            <span className="text-orange-400">K</span>wix4 Building & Construction
                            Services
                        </motion.h1
                        >
                        <motion.h2
                            className="mb-10 tracking-wide font-bold text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5"
                            initial={shouldAnimate ? "hidden" : {}}
                            animate={shouldAnimate ? "visible" : {}}
                            transition={{duration: 0.8, type: "spring"}}
                            variants={fadeInSub}>
                            CRAFTING EXCELLENCE IN EVERY CORNER
                        </motion.h2>
                        <motion.div className="justify-center sm:flex" initial={shouldAnimate ? "hidden" : {}}
                                    animate={shouldAnimate ? "visible" : {}}
                                    transition={{duration: 0.8, type: "spring"}}
                                    variants={fadeInButton}>
                            <div className="">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center w-full px-8 py-3 text-gray-100 font-bold bg-transparent border-2 border-orange-400 rounded-md shadow hover:bg-orange-400 hover:border-transparent transition "
                                >
                                    Contact us
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="absolute h-auto left-0 bottom-[85px] mx-auto w-screen flex justify-center items-center"
                    initial={shouldAnimate ? "hidden" : {}}
                    animate={shouldAnimate ? "visible" : {}}
                    transition={{duration: 0.6, type: "spring", delay: 0.6}}
                    variants={fadeInScroll}>
                    <a href="#about" aria-label="Go to the about section from here">
                        <div
                            className="h-12 w-12 flex justify-center items-center border-2 border-orange-400 rounded-full cursor-pointer hover:bg-orange-400 transition">
                            <FaAngleDown/>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Header;
