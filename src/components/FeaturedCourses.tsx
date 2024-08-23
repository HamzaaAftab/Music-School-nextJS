'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"

interface Course{
    id: number,
    title: string,
    slug: string,
    image: string;
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
        
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
    <div className="pt-6 pb-14">
        <div className="px-10">
            <div className="text-center">
            <h1 className="mb-4 lg:-mt-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">FEATURED COURSES</span></h1>
            <h3 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-white">Learn From The Best</span></h3>
            </div>
            
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                {/* <Image alt="guitar" width={200} height={2} src={course.image}/> */}
                                <p className="text-xl lg:text-xl sm:text-xl text-black mt-4 mb-2 dark:text-neutral-300 font-semibold">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                <h1 className="text-white mt-2">LEARN MORE.</h1>
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-12 text-center">
            <Link href={"/courses"}
           
            >
            <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span className="relative text-white">View More Courses</span>
</span>
</button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses