import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hello, I am Jalpa.
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            I am a reseacher and a developer at the University of Windsor, ON, Canada. 
                            I am an experienced Software Developer. I developed mobile applications and also worked closely on developing customized CRM features.
                            I am skilled in Python, Java, C, Spring MVC, Hybrid Mobile App Development, AngularJS, IoT, MySQL. 
                        </p>
                        <p className="mb-4">
                            I am also skilled in ReactJS, NextJS, NodeJS, ExpressJS, MongoDB, Firebase, AWS, Docker, Kubernetes, and more.
                            I have experience in Machine Learning, Data Science, and Artifical Intelligence.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={300}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;