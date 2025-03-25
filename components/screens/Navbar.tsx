"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Search, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

interface NavItem {
  title: string
  href?: string
  hasDropdown?: boolean
  submenu?: { title: string; href: string }[]
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Courses",
    hasDropdown: true,
    submenu: [
      { title: "Courses", href: "/courses" },
      { title: "Course Details", href: "/courses/details" },
    ],
  },
  {
    title: "Pages",
    hasDropdown: true,
    submenu: [
      { title: "About Us", href: "/pages/about" },
      { title: "Contact Us", href: "/pages/contact" },
      { title: "FAQ", href: "/pages/faq" },
    ],
  },
  {
    title: "Blog",
    hasDropdown: true,
    submenu: [
      { title: "Blog Grid", href: "/blog/grid" },
      { title: "Blog Single", href: "/blog/single" },
    ],
  },
  { title: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(title)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 500) // 500ms delay (half a second)
  }

  return (
    <header className="w-full sm:mx-auto lg:px-[12rem] sm:bg-white lg:bg-[#FDFBFB]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.hasDropdown ? (
                  <button className="flex items-center text-sm font-semibold text-slate-700 hover:text-[#1a2352]/80">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link href={item.href || "#"} className="flex items-center text-sm font-semibold text-slate-700 hover:text-[#1a2352]/80">
                    {item.title}
                  </Link>
                )}
                {item.hasDropdown && (
                  <div
                    className={`absolute left-0 top-full z-10 mt-5 w-48 rounded-md border bg-white lg:bg-[#FDFBFB] shadow-lg transition-opacity duration-200 ${
                      activeDropdown === item.title
                        ? "opacity-100 visible"
                        : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    }`}
                  >
                    {item.submenu?.map((subitem) => (
                      <Link key={subitem.title} href={subitem.href} className="block text-xs text-slate-500 px-4 lg:py-3 py-1 hover:text-slate-300">
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          <div className="hidden lg:block mr-4">

          <div className="flex items-center border border-gray-400  p-2 w-52">
  <input
    type="text"
    placeholder="Search..." 
    className="w-full text-sm flex-grow outline-none bg-transparent px-2 text-gray-700"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M8 2a6 6 0 104.472 10.193l4.182 4.182a1 1 0 001.415-1.414l-4.182-4.182A6 6 0 008 2zm0 2a4 4 0 100 8 4 4 0 000-8z"
      clipRule="evenodd"
    />
  </svg>
</div>



          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="lg:hidden border rounded-md p-2 h-10 w-10">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              <div className="flex h-20 items-center border-b px-6">
                <Link href="/" className="flex items-center">
                  <Logo />
                </Link>
                {/* <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button> */}
              </div>
              <nav className="px-6 py-4">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.title} className="py-1">
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.title)}
                            className="flex w-full items-center justify-between text-lg text-[#1a2352] hover:text-[#1a2352]/80"
                          >
                            {item.title}
                            <ChevronDown
                              className={`h-5 w-5 transition-transform ${openDropdowns[item.title] ? "rotate-180" : ""}`}
                            />
                          </button>
                          {openDropdowns[item.title] && item.submenu && (
                            <div className="mt-2 ml-4 space-y-2">
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.title}
                                  href={subitem.href}
                                  className="block py-2 text-[#1a2352]/80 hover:text-[#1a2352]"
                                >
                                  {subitem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href || "/"}
                          className="flex items-center text-lg text-[#1a2352] hover:text-[#1a2352]/80"
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <div className="flex items-center">
      <div className="mr-2 h-10 w-10 relative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5L33.6603 28.75H6.33975L20 5Z" fill="#1a2352" />
          <path d="M20 15L26.3301 26.25H13.6699L20 15Z" fill="#FFD700" transform="rotate(180 20 20.625)" />
        </svg>
      </div>
      <span className="text-xl font-bold text-[#1a2352]">Encode</span>
    </div>
  )
}

