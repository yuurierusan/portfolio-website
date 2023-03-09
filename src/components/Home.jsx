import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div
            name='home'
            className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex=row'>
                <div>
                    <h2>I'm a Software Developer</h2>
                    <p>
                        I am actively developing my abilities in software
                        development through expert-led instruction in
                        technologies such as HTML, CSS, JS, React, Mongo and
                        SQL. I am committed to hands-on learning and expanding
                        my expertise in the industry's most in-demand
                        technologies. I am also proficient in various computer
                        environments, including Windows, Macintosh, and Linux.
                    </p>
                    <div>
                        <button>
                            Projects
                            <span>
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        </button>
                    </div>
                </div>
                <img
                    src={HeroImage}
                    alt='my profile'
                    className='rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>
        </div>
    )
}
export default Home
