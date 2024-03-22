'use client'

import { Compass, FileText, LayoutGrid, LineChart, Presentation, Rocket } from 'lucide-react'
import { usePathname } from 'next/navigation'
import SidebarItem from './SidebarItem'

const guestRoutes = [
  {
    icon: LayoutGrid,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
  {
    icon: FileText,
    label: 'Docs',
    href: '/docs',
  },
]

const teacherRoutes = [
  {
    icon: Presentation,
    label: "Courses",
    href: "/teacher/courses",
    pro: true,
  },
  {
    icon: LineChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
]

const docsRoutes = [
  {
    icon: Rocket,
    label: "Getting Started",
    href: "/docs/getting-started",
  }
]

const SidebarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.includes('/teacher')

  const isDocsPage = pathname?.includes('/docs')

  const routes = isTeacherPage ? teacherRoutes : isDocsPage ? docsRoutes : guestRoutes

  return (
    <div className='flex flex-col w-full'>
      {routes.map((route) => (
        <SidebarItem 
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}

export default SidebarRoutes