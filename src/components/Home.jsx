import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div
            name='home'
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='mt-20 flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Software Developer
                    </h2>

                    <p className='text-gray-500 py-4 max-w-md'>
                        I am actively developing my abilities in software
                        development through expert-led instruction in
                        technologies such as HTML, CSS, JS, React, Mongo and
                        SQL. I am committed to hands-on learning and expanding
                        my expertise in the industry's most in-demand
                        technologies. I am also proficient in various computer
                        environments, including Windows, Macintosh, and Linux.
                    </p>

                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight
                                    size={25}
                                    className='ml-1'
                                />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='mt-20 w-2/3 h-auto'>
                    <img
                        src={HeroImage}
                        alt='my profile'
                        className='rounded-2xl mx-auto w-2/3 md:w-full'
                    />
                </div>
            </div>
        </div>
    )
}
export default Home
