import React from "react";
import SocialSuggestionImg from "../assets/socialSuggestionImg.png";
import StudentEnrollmentImg from "../assets/studentEnrollmentImg.png";
import CarBookingImg from "../assets/carBookingImg.png";
import FFDProjectImg from "../assets/ffdProjectImg.png";
import DictionaryImg from "../assets/dictionaryImg.png";
import MerlinForMenImg from "../assets/merlinForMenImg.png"
import { Links } from "../links/links";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Experience
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid items */}

            <div
                style={{ backgroundImage: `url(${SocialSuggestionImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider break-words">
                    Social Suggestions System
                </span>
                <div className="pt-8 text-center">
                    <a href={Links.SocialSuggestionsProject} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                    </button>
                    </a>
                </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${StudentEnrollmentImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                    Student Enrollment System
                </span>
                <div className="pt-8 text-center">
                    <a href={Links.StudentEnrollmentProject} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                    </button>
                    </a>
                </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${CarBookingImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                    Car Booking System
                </span>
                <div className="pt-8 text-center">
                    <a href={Links.CarBookingProject} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                    </button>
                    </a>
                </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${FFDProjectImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                    Fight For Dream Project
                </span>
                <div className="pt-8 text-center">
                    <a href={Links.FFDdemo} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                    </button>
                    </a>
                    <a href={Links.FFDproject} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                    </button>
                    </a>
                </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${DictionaryImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                    Dictionary website
                </span>
                <div className="pt-8 text-center">
                    <a href={Links.DictionaryDemo} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                    </button>
                    </a>
                    <a href={Links.DictionaryProject} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                    </button>
                    </a>
                </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${MerlinForMenImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                    Merlin For Men website
                </span>
                <div className="pt-8 text-center">
                    <a href={Links.MerlinForMenDemo} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                    </button>
                    </a>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
