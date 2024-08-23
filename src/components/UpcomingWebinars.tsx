'use client'

import React from 'react'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
    const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];
 
 
 
    return (
    <div className="p-12 pb-8 mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className='text-center'>
            <h1 className="mb-5 lg:-mt-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-yellow-400">FEATURED WEBINARS</span></h1>
            <h3 className="mb-2 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-white">Enhance your Musical Journey</span></h3>
            </div>

            <div className='mt-6'>
                <HoverEffect
                items={featuredWebinars.map(webinar =>(
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: `/webinars/${webinar.slug}`,
                        isFeatured: webinar.isFeatured
                    }
                ))}
                
                
                
                />


            </div>

            <div className="mt-4 text-center">
            <Link href={"/courses"}
           
            >
            <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span className="relative text-white">View All Webinars</span>
</span>
</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
