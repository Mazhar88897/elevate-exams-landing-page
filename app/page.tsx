
"use client"
import Navbar from "@/components/screens/Navbar"
import Hero from "@/components/screens/hero"
import { CustomButton } from "@/components/pages/CustomButton"
import { Highlight } from "@/components/pages/Highlight"
import Footer from "@/components/screens/Footer"
import CourseShowcase from "@/components/screens/CourseCard"
import { HoverCard } from "@/components/pages/HoverCard"
import Accords from "@/components/screens/Accords"
import Qouatation from "@/components/screens/Qouatation"
import Blogs from "@/components/screens/Blogs"
import Owner from "@/components/screens/owner"
import Courses from "@/components/screens/courses"
import CoursesHeading from "@/components/screens/coursesHeading"
import Image from "next/image"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <div className="-translate-y-[150px]  w-full flex justify-center items-center">
      
      <DotLottieReact
      src="/animation.lottie"
      className="h-[500px] "
      loop
      autoplay
    />
                            
      </div>



      <CoursesHeading />
      <Courses />
      <CourseShowcase />
      <Accords />
      <Qouatation />
      <Owner />
      <Blogs />
      <Footer />

    </main>
  )
}
