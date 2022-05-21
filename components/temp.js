import Link from "next/link"
import React from "react"
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Navigation = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])


    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className=" px-4 mx-auto md:flex-row lg:max-w-4xl flex items-center justify-between">
                <div className="flex flex-col">
                    <Link href="/">
                        <a
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Jalpa Patel
                        </a>
                    </Link>
                </div>
                <div className="space-x-10 hidden md:block items-center justify-between">
                    <Link href="/experience">
                        <a
                            className={" font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Skills
                        </a>
                    </Link>
                    <Link href="/experience">
                        <a
                            className={" font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Experience
                        </a>
                    </Link>
                    <Link href="/experience">
                        <a
                            className={" font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Projects
                        </a>
                    </Link>
                    <Link href="/resume">
                        <a
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Resume
                        </a>
                    </Link>
                    
                </div>
                <div className="space-x-4 flex flex-row items-center">
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="w-8 h-8 px-1 ml-1 mr-1 rounded sm:ml-4"
                        onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-black-500 dark:text-black-500"
                        >
                            {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
                                // <path
                                //     fillRule="evenodd"
                                //     d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                //     clipRule="evenodd"
                                // />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            ) : (
                                // <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Navigation;