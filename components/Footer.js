import React from 'react'

const Footer = () => {
  return (
    <div className="lg:mt-18 sm:pb-30 bg-cream py-6 dark:bg-black dark:bg-opacity-5 sm:py-12">
      <div className="text-gray-800 mx-auto max-w-7xl px-4 dark:text-white">
        <div className="mb-2 border-t-2 border-black border-opacity-20 pb-8 dark:border-white"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            <a
              href="https://www.linkedin.com/in/pjalpa015/"
              className={'hover:text-yellow-500 transition-colors'}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jalpa015"
              className={'hover:text-yellow-500 transition-colors'}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/jalpa_015"
              className={'hover:text-yellow-500 transition-colors'}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://medium.com/@pjalpa015"
              className={'hover:text-yellow-500 transition-colors'}
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            {/* <a
                            href="#"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            DEV
                        </a> */}
            <a
              href="https://devjalpa.hashnode.dev/"
              className={'hover:text-yellow-500 transition-colors'}
              target="_blank"
              rel="noreferrer"
            >
              Hashnode
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
