import userData from '../constants/data'
import React from 'react'

export default function Experience() {
  return (
    <section className="space-y-14 lg:space-y-24">
      {/* <div className="max-w-6xl mx-auto h-48  ">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div> */}
      <div className=" -mt-4">
        <div className="mx-auto grid max-w-3xl grid-cols-1 pt-20">
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
                <div className="divider-container -mt-2 flex flex-col items-center">
                  <div className="relative z-10 h-4 w-4 rounded-full bg-peach">
                    <div className="relative z-10 h-4 w-4 animate-ping rounded-full bg-peach"></div>
                  </div>
                  <div className="-mt-2 h-24 w-1 rounded-full bg-charcoal bg-opacity-80 dark:bg-white dark:bg-opacity-80"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ title, desc, year, company }) => {
  return (
    <div className="experience-card relative z-10 mx-4 rounded-md border p-4 font-mono shadow-xl">
      {/* <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-700 font-bold dark:text-gray-800"> */}
      <h1 className="text-gray-700 pb-3 text-3xl font-bold dark:text-white md:-left-10">
        {title}
      </h1>
      <h1 className="pb-3 text-xl font-semibold">{company}</h1>
      <h1 className="pb-3 text-xl font-semibold">{year}</h1>
      <p className="text-gray-600 dark:text-gray-400 my-2 text-lg ">{desc}</p>
    </div>
  )
}
