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
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <div className="flex flex-col">
                    <Link href="/">
                        <a
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Jalpa Patel
                        </a>
                    </Link>
                </div>
                <div className="space-x-8 ml-300 ">
                    <Link href="/experience">
                        <a
                            className={" font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Experience
                        </a>
                    </Link>
                </div>
                <Link href="/resume">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Resume
                    </a>
                </Link>
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
                    onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-gray-900 dark:text-gray-100"
                    >
                        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
                            <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clipRule="evenodd"
                            />
                        ) : (
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        )}
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navigation;