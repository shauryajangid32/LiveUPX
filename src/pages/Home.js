import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import {
    MdOutlineDevices,
    MdOutlineSystemUpdateAlt,
    MdOutlineAnalytics,
    MdOutlineSmartToy,
    MdOutlineCloudQueue,
    MdOutlineSecurity,
} from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import { LuShield } from "react-icons/lu";
import { LiaBrainSolid } from "react-icons/lia";
import { CgDatabase } from "react-icons/cg";
import { TbCloudCog } from "react-icons/tb";
import { TiArrowRight } from "react-icons/ti";
import { LuMicroscope } from "react-icons/lu";
import { RiBankLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuTruck } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { LuFactory } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
function Home() {
    return (
        <>
            {/* first section */}
            <div
                className="h-screen max-w-screen flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(/bg.png)` }}
            >
                <div className="flex pt-[60px] flex-col items-center space-y-[50px] justify-center">
                    <h1 className="md:text-5xl text-xl tracking-wider font-aeion text-center text-white drop-shadow-2xl font-bold px-10 sm:px-[160px]">
                        TRANSFORM LEGACY SYSTEMS INTO MODERN ENTERPRISE SOLUTIONS
                    </h1>
                    <span className="bg-purple-800 text-white text-base font-aeion px-10 py-4 rounded-full cursor-pointer hover:bg-blue-800 transition duration-300">
                        Get a free Consultation
                    </span>
                </div>

                {/* Chat Icon */}
                <div className="fixed z-999 bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full text-3xl cursor-pointer hover:bg-blue-800 transition duration-300">
                    <IoChatbubblesOutline />
                </div>
            </div>

            {/* Second Section */}

            <h1 className="md:text-[65px] text-center text-[25px] md:h-screen leading-tight md:py-[100px] md:px-[80px] p-[20px] font-semibold font-aeion md:tracking-wider md:text-left flex items-center md:justify-center">
                Revitalize your business with scalable, secure, and efficient enterprise applications designed for the digital age.
            </h1>


            {/* third section */}

            <div className="bg-gray-100 flex flex-col justify-center space-y-14 items-center py-[40px] px-4">
                <div className="max-w-7xl w-full flex flex-col justify-center items-center text-center">
                    <h1 className="md:text-[55px] text-[25px] tracking-wider font-semibold font-aeion">Services</h1>
                    <p className="text-gray-400 md:text-lg text-sm  max-w-2xl">
                        We deliver end-to-end software solutions that solve complex business challenges and drive digital transformation.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Web & Mobile App Development",
                            desc: "Custom web and mobile applications tailored to your business needs",
                            icon: <MdOutlineDevices size={20} className="text-blue-500" />,
                            image: "/img1.jpg",
                        },
                        {
                            title: "Enterprise Software Modernization",
                            desc: "Transform legacy systems into cutting-edge digital solutions",
                            icon: <CgDatabase size={20} className="text-blue-500" />,
                            image: "/img2.jpg",
                        },
                        {
                            title: "Data Analytics & BI",
                            desc: "Extract valuable insights from your data for informed decisions",
                            icon: <LuDatabase size={20} className="text-red-500" />,
                            image: "/img3.jpg",
                        },
                        {
                            title: "AI & Emerging Tech",
                            desc: "Stay ahead with artificial intelligence and emerging technologies",
                            icon: <LiaBrainSolid size={20} className="text-orange-500" />,
                            image: "/img4.jpg",
                        },
                        {
                            title: "Cloud & DevOps",
                            desc: "Optimize infrastructure with cloud computing and DevOps practices",
                            icon: <TbCloudCog size={20} className="text-blue-500" />,
                            image: "/img5.jpg",
                        },
                        {
                            title: "Cybersecurity & QA",
                            desc: "Protect your digital assets and ensure software quality",
                            icon: <LuShield size={20} className="text-red-500" />,
                            image: "/img6.jpg",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg  transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Image section */}
                            <div
                                className="h-48 bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                {/* Purple Overlay */}
                                <div className="absolute inset-0 bg-purple-700/70 mix-blend-overlay brightness-110"></div>

                                {/* Gradient Overlay from bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent p-4 text-white flex flex-col justify-end">
                                    <div className="flex  items-center gap-2 font-semibold">
                                        <span style={{ backgroundColor: "#D9D9D9" }} className="p-2 rounded-full">
                                            {item.icon}
                                        </span>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            </div>



                            {/* Text Section */}
                            <div className="p-5">
                                <p className="text-gray-400 mb-4">{item.desc}</p>
                                <span className="text-blue-600 font-medium cursor-pointer hover:underline flex items-center gap-1">
                                    Learn More →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="bg-gray-50 border border-gray-200 px-5 font-normal py-1 hover:bg-gray-200 rounded-full transition cursor-pointer">View All Services</h1>
            </div>

            {/* fourth section */}
            <div className="flex items-center md:h-screen">
                <div className="md:py-[100px]  md:px-[80px] p-5">
                    <h1 className="md:text-[60px] text-[25px]  font-semibold font-aeion md:text-left text-center leading-tight tracking-wider">LiveUpX</h1>
                    <h1 className="md:text-[60px] text-[25px] leading-tight font-semibold font-aeion tracking-wider md:text-left text-center">
                        provides full-cycle software development, AI solutions, cloud & DevOps, cybersecurity, and data analytics services for modern enterprises across Europe.
                    </h1>

                </div>
            </div>

            {/* fifth section */}
            <div className="bg-gray-100 flex flex-col justify-center md:space-y-14 space-y-5 items-center md:py-[80px] p-10 md:px-4">
                <div className="max-w-7xl w-full flex flex-col justify-center items-center text-center">
                    <h1 className="md:text-[55px] text-[25px] font-semibold tracking-wider font-aeion mb-4">By the numbers</h1>
                    <p className="text-gray-400 md:text-lg text-sm font-normal max-w-2xl">
                        Delivering exceptional solutions across the globe with proven results and satisfied clients.
                    </p>
                </div>

                {/* Cards Grid */}
                {/* Cards Grid */}
                <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            number: "17+",
                            title: "Countries with Global Presence",
                        },
                        {
                            number: "600+",
                            title: "Successfully Delivered Projects",
                        },
                        {
                            number: "12+",
                            title: "Years of Industry Experience",
                        },
                        {
                            number: "96%",
                            title: "Client Retention Rate",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl overflow-hidden md:p-8 p-4 shadow-md flex flex-col items-center justify-center text-center relative"
                        >
                            {/* Purple semi-circle corner */}
                            <div className="absolute top-0 left-0 md:w-9 md:h-9 w-7 h-7 bg-purple-600 rounded-br-full"></div>

                            <h2 className="md:text-6xl text-xl font-bold text-purple-700 md:mb-4">{item.number}</h2>
                            <p className="text-gray-400 text-sm font-medium">{item.title}</p>
                        </div>


                    ))}
                </div>

                <p className="text-gray-400 md:text-lg text-xs text-center font-normal md:max-w-2xl">Our global team delivers exceptional solutions and maintains an industry-leading client satisfaction rate, powering digital transformation across 17+ countries.</p>
            </div>


            {/* sixth section */}
            <div className=" flex flex-col justify-center md:space-y-14 space-y-5 items-center md:py-[80px] md:px-4 p-10">
                <div className="max-w-[1050px] w-full flex flex-col justify-center items-center text-center">
                    <h1 className="md:text-[55px] text-[25px] tracking-wider font-semibold font-aeion mb-4">Why Liveupx</h1>
                    <p className="text-gray-400  md:text-lg text-sm font-normal max-w-2xl">
                        We combine technical excellence with strategic insight to deliver solutions that drive business growth.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="max-w-[1220px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Deep Expertise",
                            description: "Our team consists of seasoned professionsls with expertise across various domains and technologies.",
                        },
                        {
                            title: "Enterprise-Grade Security",
                            description: "We implement rigorous security protocols to safeguard your sensitive data and intellectual property.",
                        },
                        {
                            title: "Innovative Solutions",
                            description: "We leverage cutting-edge technologies to deliver innovative and future-proof solutions",
                        },
                        {
                            title: "Timely Delivery",
                            description: "We pride ourselves on meeting deadlines without compromising on quality or functionality",
                        },
                        {
                            title: "Scalable Architecture",
                            description: "Our solutions are designed to grow with your business, ensuring long-term sustainability",
                        },
                        {
                            title: "Transparent Communication",
                            description: "We maintain clear and open communication throughout the project lifecycle.",
                        },
                        {
                            title: "Global Perspective",
                            description: "With experience across 17-countries, we bring diverse perspectives to solve complex challenges.",
                        },
                        {
                            title: "Client-Centric Approach",
                            description: "Your success is our priority, and we tailor our solutions to meet your specific needs",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            // style={{ backgroundColor: "#fbfbfb" }}
                            className="rounded-2xl z-1 bg-gradient-to-t from-[#fbfbfb] via-[#fbfbfb] to-white overflow-hidden p-6 shadow-lg flex flex-col items-start justify-start text-left relative hover:shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
                        >
                            <div className="mb-4 md:p-4 p-2 bg-purple-100 md:rounded-xl rounded-lg">
                                <LuShield className="text-purple-700 md:w-5 md:h-5 w-5 h-5" />
                            </div>
                            <h3 className="md:text-xl text-sm font-semibold text-black mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-[10px] md:text-[15px]">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>


            {/* seventh section */}
            <div className="md:h-screen flex items-center">
                <h1 className="md:text-[65px] text-[25px] bg-gray-100 leading-tight md:p-[80px] p-10 font-semibold font-aeion text-center md:text-left">
                    Liveupx is a global IT services, consulting, and business solutions organization helping enterprises navigate their digital transformation.
                </h1>

            </div>

            {/* eighth section */}
            <div className="flex flex-col justify-center md:space-y-14 space-y-8 items-center md:py-[60px] py-10 px-4">
                {/* Heading */}
                <div className="max-w-7xl w-full flex flex-col justify-center items-center text-center space-y-2">
                    <h1 className="md:text-[55px] text-2xl tracking-wider font-semibold font-aeion">
                        Industries
                    </h1>
                    <p className="text-gray-400 md:text-lg text-sm max-w-2xl">
                        We deliver customized digital solutions to address unique challenges across various industries.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        {
                            title: "Healthcare & Life Sciences",
                            desc: "Digital solutions transforming patient care and medical research",
                            icon: <LuMicroscope className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />,
                            image: "/img7.jpg",
                        },
                        {
                            title: "Fintech & Banking",
                            desc: "Innovative financial technology solutions for the digital age",
                            icon: <RiBankLine className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />,
                            image: "/img9.jpg",
                        },
                        {
                            title: "E-Commerse & Retail",
                            desc: "Advanced platforms for exceptional digital retail experiences",
                            icon: <LuShoppingCart className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />,
                            image: "/img8.jpg",
                        },
                        {
                            title: "EdTech & Workspace",
                            desc: "Learning platforms revolutionizing education and training",
                            icon: <RiGraduationCapLine className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />,
                            image: "/img7.jpg",
                        },
                        {
                            title: "Logistics & Supply Chain",
                            desc: "Smart supply chain and transportation management solutions",
                            icon: <LuTruck className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />,
                            image: "/img7.jpg",
                        },
                        {
                            title: "Smart Manufacturing",
                            desc: "IoT and digital transformation for smart factories",
                            icon: <LuFactory className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />,
                            image: "/img7.jpg",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Image section */}
                            <div
                                className="h-44 sm:h-48 bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                {/* Purple Overlay */}
                                <div className="absolute inset-0 bg-purple-700/70 mix-blend-overlay brightness-110"></div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent p-3 sm:p-4 text-white flex flex-col justify-end">
                                    <div className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                                        <span style={{ backgroundColor: "#D9D9D9" }} className="p-1 sm:p-2 rounded-full">
                                            {item.icon}
                                        </span>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="p-4 sm:p-5 bg-gray-100">
                                <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">{item.desc}</p>
                                <span className="text-blue-600 text-sm sm:text-base font-medium cursor-pointer hover:underline flex items-center gap-1">
                                    Learn More →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <span className="bg-gray-50 border flex flex-row items-center gap-2 border-gray-200 px-4 sm:px-5 font-normal py-2 hover:bg-gray-200 rounded-full transition cursor-pointer mt-4 sm:mt-8">
                    <h1 className="font-medium text-sm sm:text-base">View All Industry Solutions</h1>
                    <span className="text-xl sm:text-2xl"><TiArrowRight /></span>
                </span>
            </div>


            {/* ninth section - Trusted by Industry Leaders */}
            <div className="bg-gray-100 md:h-screen flex items-center justify-center md:px-4 p-10">
                <div className="p-6 md:space-y-14 space-y-8 md:flex md:flex-col items-center justify-center w-full">

                    {/* Header Section */}
                    <div className="md:max-w-[1050px] w-full flex flex-col md:gap-5 justify-center items-center text-center px-2">
                        <h1 className="text-sm text-nowrap sm:text-2xl md:text-[50px] font-semibold font-aeion md:tracking-wider">
                            Trusted by Industry Leaders
                        </h1>
                        <p className="text-gray-500 text-xs sm:text-[8px] md:text-lg font-normal max-w-2xl">
                            We've partnered with innovative organizations across multiple industries to deliver exceptional digital solutions.
                        </p>
                    </div>

                    {/* Company Logos Strip */}
                    <div className="w-full max-w-[1220px] bg-gradient-to-r from-gray-100 to-white p-6 md:p-10 shadow-xl overflow-x-auto">
                        <div className="flex flex-row gap-6 sm:gap-8 items-center justify-start sm:justify-between min-w-[800px] sm:min-w-0">
                            {[
                                { src: "/img1.jpg", alt: "Scholar IAS" },
                                { src: "/img2.jpg", alt: "Rare & Minted" },
                                { src: "/img3.jpg", alt: "Conekto" },
                                { src: "/img4.jpg", alt: "Takeoff" },
                                { src: "/img5.jpg", alt: "RidePlus" },
                            ].map((logo, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white overflow-hidden shadow-md rounded-xl flex items-center justify-center h-[80px] sm:h-[100px] w-[150px] sm:w-[200px] transform transition-transform duration-300 hover:scale-105"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* tenth section */}
            <div className="flex md:h-screen flex-col justify-center space-y-14 items-center py-[80px] px-4 bg-gradient-to-b from-white via-[#d8b4fe] to-[#a855f7]">
                <div className="max-w-[1050px] w-full flex flex-col justify-center items-center text-center">
                    <h1 className="md:text-[45px] text-[25px] tracking-wider font-semibold font-aeion mb-4">
                        Connect with us
                    </h1>
                    <p className="text-gray-600 md:text-lg text-sm font-normal max-w-2xl">
                        We're here to help. Contact us today to discuss your project, request a quote, or learn more about our services.
                    </p>
                </div>

                <span className="bg-[#714cc9] text-white md:text-base text-xs font-aeion md:px-20 px-5 md:py-4 py-2 rounded-full cursor-pointer hover:bg-[#5f34a8] md:hover:shadow-xl transition duration-300">
                    Get in touch
                </span>
            </div>

            {/* eleventh section - Footer */}
<footer className="bg-gray-100 text-gray-400 md:text-base px-4 sm:px-8 pt-12 pb-[50px] border-t">
    <div className="max-w-10xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {/* Company Info */}
        <div className="md:space-y-7 space-y-4 col-span-2">
            <img src="/logo.png" alt="Liveupx" className="md:h-14 h-8" />
            <p className="md:text-sm text-[10px] text-justify">
                Liveupx is a global IT services, consulting, and business solutions organization helping enterprises navigate their digital transformation.
            </p>

            <div className="md:space-y-4 space-y-2">
                <p className="flex text-[10px] items-center md:gap-2">
                    <span className="md:text-xl text-[10px] text-gray-600">
                        <CiLocationOn />
                    </span>
                    F86G+92X, Knowledge Park I, Greater Noida, Uttar Pradesh 201310, India
                </p>
                <p className="flex items-center text-[10px] md:gap-2">
                    <span className="md:text-lg text-[10px] text-gray-600">
                        <FiPhone />
                    </span>
                    +91-70603-71701
                </p>
            </div>
            <div className="md:space-y-4 space-y-2 text-[10px]">
                <p>✉ help@liveupx.com</p>
                <p>✉ info@liveupx.com</p>
            </div>
        </div>

        {/* What We Do */}
        <div className="md:space-y-7 space-y-1 text-[10px] sm:text-sm">
            <h4 className="font-semibold text-black">What We Do</h4>
            {[
                "Digital Transformation",
                "Enterprise Software",
                "Legacy Migration",
                "AI & Emerging Tech",
                "Generative AI",
                "Blockchain & Web3",
                "Web & Mobile Apps",
                "Cloud & DevOps",
            ].map((item, i) => (
                <p key={i} className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
                    <MdArrowForwardIos className="text-[8px] mt-[2px]" />
                    <span>{item}</span>
                </p>
            ))}
        </div>

        {/* Industries */}
        <div className="md:space-y-7 space-y-1 text-[10px] sm:text-sm">
            <h4 className="font-semibold text-black">Industries</h4>
            {[
                "Healthcare",
                "Fintech",
                "E-commerce",
                "EdTech",
                "Logistics",
                "Manufacturing",
                "Media & Entertainment",
                "CleanTech",
            ].map((item, i) => (
                <p key={i} className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
                    <MdArrowForwardIos className="text-[8px] mt-[2px]" />
                    <span>{item}</span>
                </p>
            ))}
        </div>

        {/* Who We Are */}
        <div className="md:space-y-7 space-y-1 text-[10px] sm:text-sm">
            <h4 className="font-semibold text-black">Who We Are</h4>
            {[
                "Vision & Mission",
                "Global Presence",
                "Leadership",
                "Awards & Recognition",
                "Working Process",
                "Our Portfolio",
                "Client Login",
                "Raise a Ticket",
            ].map((item, i) => (
                <p key={i} className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
                    <MdArrowForwardIos className="text-[8px] mt-[2px]" />
                    <span>{item}</span>
                </p>
            ))}
        </div>

        {/* Insights & Careers */}
        <div className="md:space-y-7 space-y-1 text-[10px] sm:text-sm">
            <h4 className="font-semibold text-black">Insights</h4>
            {[
                "Blog",
                "Case Studies",
                "Whitepapers",
                "Events",
            ].map((item, i) => (
                <p key={i} className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
                    <MdArrowForwardIos className="text-[8px] mt-[2px]" />
                    <span>{item}</span>
                </p>
            ))}

            <h4 className="font-semibold text-black">Careers</h4>
            {[
                "Open Positions",
                "Culture & Benefits",
                "Internships",
                "Life at Liveupx",
            ].map((item, i) => (
                <p key={i} className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
                    <MdArrowForwardIos className="text-[8px] mt-[2px]" />
                    <span>{item}</span>
                </p>
            ))}
        </div>
    </div>

    {/* Bottom Section */}
    <hr className="border-t border-gray-300 my-8" />

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-xs sm:text-sm px-2">
        <div className="md:space-y-2 space-y-1 text-center md:text-left">
            <h1 className="text-gray-600 text-[11px] md:text-[17px] text-nowrap">© 2025 All rights are reserved by Liveupx Private Limited</h1>
            <span className="flex text-[10px] md:text-[15px] text-gray-400 flex-wrap justify-center md:justify-start gap-2 sm:gap-4">
                <h1>Registration Nu:136527</h1>
                <h1>CIN: 072200UP2020PTC136527</h1>
            </span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-[8px] sm:text-sm">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales policy</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
        </div>
    </div>

    <hr className="border-t border-gray-300 my-8" />

    <div className="space-y-3 text-[11px]  sm:text-sm leading-relaxed text-justify break-words px-2 sm:px-0">
        <p>
            <span className="text-gray-600 font-semibold">Disclaimer:</span> The information provided on this website is for general informational purposes-only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with, the use of this website.
        </p>
        <p>
            Through this website, you may be able to link to other websites which are not under the control of Liveupx Private Limited. We have no control over the nature, content and availability of those sites. The inclusion of any link does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However, Liveupx Private Limited takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
        </p>
    </div>
</footer>


        </>
    );
}

export default Home;
