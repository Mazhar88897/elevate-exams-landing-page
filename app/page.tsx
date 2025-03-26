

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
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <div className="h-[60vh] w-full flex justify-center items-center">
            <h1 className="text-5xl font-black">Animation</h1>
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
