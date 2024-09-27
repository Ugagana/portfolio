import React from "react";

import AnimatedWrapper from "./ui/AnimatedWrapper";

import { Download } from "./Icons";
import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpeg";
import SectionHeading from "./SectionHeading";
import techStack from '../data/techStack';  // Assuming techStack.js is in the same folder as About.js
;

const About = () => {
  return (
    <div
      name="About"
      className=" pt-8 h-full min-h-screen w-full flex items-center  bg-gradient-to-b to-black via-black from-gray-800 "
    >
      <div className="section justify-between">
        <AnimatedWrapper>
          <SectionHeading heading="About Me" />
        </AnimatedWrapper>
        <div className="mb-10  flex flex-col justify-center ">
          <AnimatedWrapper animateFrom="bottom">
            <img
              src={profile}
              alt="Profile"
              width="auto"
              height="auto"
              loading="lazy"
              title="Profile Picture"
               className="cursor-pointer hover:scale-[1.02] transition-all delay-75 border-4 border-transparent hover:border-white duration-300 rounded-2xl min-w-[240px] w-1/2 mx-auto  md:w-[270px]"
            />
          </AnimatedWrapper>
        </div>
        <div className="flex flex-col justify-center w-full px-2 xs: sm:px-12 md:px-4 lg:px-14 text-white ">
          <AnimatedWrapper animateFrom="bottom">
            <h3 className="text-2xl xs:text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-semibold ">
              Hi, I'm{" "}
              <span className="text-cyan-500 block xs:inline">
                Gagana Uday Kumar
              </span>
            </h3>
          </AnimatedWrapper>
          <div className="text-gray-400 py-4 space-y-2 md:space-y-2 md:pt-8 lg:pt-12 font-semibold text-justify">
            <AnimatedWrapper>
              <p className="leading-tight">
              I'm a data enthusiast skilled in turning complex datasets into clear, actionable insights. With expertise in Python, R, and SQL, I build predictive models and create impactful visualizations. I love solving problems, optimizing workflows, and helping businesses make smarter, data-driven decisions.
              </p>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <p className="leading-tight">
              Whether it's optimizing business processes or developing user-friendly web apps, I thrive on solving problems and making data-driven decisions. With a creative and analytical mindset, I aim to deliver both functionality and aesthetic appeal in my projects.
              </p>
            </AnimatedWrapper>
            
          </div>
          <AnimatedWrapper>
            <div className="py-3 text-gray-50 flex flex-col sm:flex-row font-semibold gap-3 sm:gap-5 sm:items-center">
              <div className="min-w-fit">
                <p>My Tech Stack ~</p>
              </div>
              <AnimatedWrapper>
                <ul className="px-2 flex gap-5 z-40 flex-wrap">
      {techStack.map(({ id, icon, name }) => {
        return (
          <li key={id} className="relative list-none group">
            <img
              src={icon}  // Use the icon image path
              alt={name}  // Alt text for accessibility
              width="40px"  // Adjust width as needed
              height="40px"  // Adjust height as needed
              className="z-20"
            />
            <div className="flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute z-50 -bottom-10 left-1/2 -translate-x-1/2 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
              {name}  {/* Display name when hovered */}
            </div>
          </li>
        );
      })}
    </ul>
              </AnimatedWrapper>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <div className="py-5">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                download={true}
                className="z-30  group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3  rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-36 relative"
              >
                <span className="pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out">
                  Resume
                </span>
                <span className="absolute right-5 sm:scale-0 transition-all group-hover:scale-100 ease-in delay-200 animate-pulse duration-500 ">
                  <Download />
                </span>
              </a>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;
