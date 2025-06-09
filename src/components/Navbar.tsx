'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { FaUser, FaChevronDown } from 'react-icons/fa'
import Button from '@/components/common/Button'
import TextLabel from '@/components/common/TextLabel'

const mainNavItems = [
  {
    title: 'HOME',
    href: '/'
  },
  {
    title: 'ABOUT',
    href: '/#about'
  },
  {
    title: 'PROGRAMMES',
    href: '/#programs'
  },
  {
    title: 'FACULTY',
    href: '/about/faculty'
  },
  {
    title: 'IQAC',
    href: '/iqac'
  },
  {
    title: 'GALLERY',
    href: '/gallery'
  },
  {
    title: 'CONTACT',
    href: '/#contact'
  }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm border-b border-white/10 ${
        isScrolled ? 'bg-green-700/90' : 'bg-black/20'
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <nav className="flex items-center justify-between h-16 px-5 md:pr-[6.5rem] md:pl-[90px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/images/load/logo.jpg"
                alt="Ilahiya College Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <TextLabel
              text="ILAHIYA"
              color="white"
              variant="nav"
              className="text-xl font-bold"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>

          {/* Student Portal Button */}
          <Button
            variant="secondary"
            href="/student-portal"
            className="!bg-green-600/20 hover:!bg-green-600/30 !text-white !border-0"
          >
            <TextLabel
              text="STUDENT PORTAL"
              color="white"
              variant="button"
            />
          </Button>
        </nav>
      </div>
    </motion.header>
  )
}

interface NavItem {
  title: string
  href: string
  subItems?: { title: string; href: string }[]
}

function NavLink({ item }: { item: NavItem }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = item.href.split('#')[1];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        href={item.href}
        onClick={handleClick}
        className="flex items-center gap-1"
      >
        <TextLabel
          text={item.title}
          color="gray"
          variant="nav"
          isActive={isHovered}
        />
        {item.subItems && <FaChevronDown className="text-xs text-white" />}
      </Link>

      {/* Underline animation */}
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 bg-green-100"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Dropdown Menu */}
      {item.subItems && (
        <motion.div
          className="absolute top-full left-0 mt-2 py-2 bg-white rounded-lg shadow-lg min-w-[200px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ y: 10 }}
          animate={{ y: isHovered ? 0 : 10 }}
        >
          {item.subItems.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className="block px-4 py-2 hover:bg-green-50 transition-colors"
            >
              <TextLabel
                text={subItem.title}
                color="black"
                variant="nav"
              />
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  )
} 