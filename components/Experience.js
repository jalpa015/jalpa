import userData from "../constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="space-y-14 lg:space-y-24">
      {/* <div className="max-w-6xl mx-auto h-48  ">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div> */}
      <div className=" -mt-4">
        <div className="grid grid-cols-1 max-w-3xl mx-auto pt-20">
          {/* <h1>Experience</h1> */}
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({title, desc, year, company }) => {
  return (
    <div className="font-mono relative experience-card border p-4 rounded-md shadow-xl z-10 mx-4">
      {/* <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-700 font-bold dark:text-gray-800"> */}
      <h1 className="pb-3 md:-left-10 text-3xl text-gray-700 font-bold dark:text-white">
        {title}
      </h1>
      <h1 className="font-semibold text-xl pb-3">{company}</h1>
      <h1 className="font-semibold text-xl pb-3">
        {year}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 my-2 text-lg ">{desc}</p>
    </div>
  );
};