import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center font-mono lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          {/* <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hello, I am Jalpa.
                    </h1> */}
          <h4 className="mb-1 font-mono text-4xl dark:text-white md:text-4xl">
            Hi, I&apos;m <br className="block md:hidden" />
            <span className="text-brand-accent text-blue inline-flex h-20 animate-type overflow-x-hidden whitespace-nowrap pt-2 will-change-transform group-hover:animate-type-reverse">
              Jalpa Patel 👋
            </span>
            <span className="ml-2 -mb-2 box-border inline-block h-10 w-1 animate-cursor bg-white will-change-transform md:-mb-4 md:h-16"></span>
          </h4>
          <div className="text-xl font-semibold md:text-2xl">
            Software developer and ML Reseacher
          </div>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              I am a researcher and a developer at the University of Windsor,
              ON, Canada. I am an experienced Software Developer. During my work
              experience, I have developed mobile applications and worked
              closely on developing customized CRM features using AngularJS,
              Spring MVC architecture and Java programming. I have worked with
              Cordova to build Android and iOS mobile applications. Over time, I
              have learned new technologies and frameworks like NextJS and
              TailWind.
            </p>
            <p className="mb-4">
              During my Co-op experience, I have closely worked with Relational
              Database(MySQL). I have also had the opportunity to develop custom
              jQuery plugins for the inventory dashboard. The experience also
              gave me exposure to writing stored procedures and reports for
              Microsoft SQL Server.
            </p>
            <p className="mb-4">
              During my Master&apos;s degree, I have picked up Machine Learning
              and AI skills. I got the opportunity to learn and implement Data
              Visulaziations and Modeling on varying datasets during my
              volunteer work experience at WinAIML. I also explored EDA and NLP
              techniques on Twitter and movie datasets, to list a few. I learned
              various frameworks like Tensorflow and Keras during the research
              and deployed an ML model on AWS Cloud instance and Google Cloud.
            </p>
            <p className="mb-4">
              Please reach out to me for a tech chat or to share experiences on
              my{' '}
              <a className="underline" href="mailto:pjalpa015@gmail.com">
                {' '}
                email
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src="/profile.png"
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={350}
            height={350}
            // placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default About
