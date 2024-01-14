'use client'

import { Compass, LayoutGrid, LineChart, Presentation } from 'lucide-react'
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

const SidebarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.includes('/teacher')

  const routes = isTeacherPage ? teacherRoutes : guestRoutes

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