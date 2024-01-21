'use client'

import { Category } from '@prisma/client'
import CategoryItem from './CategoryItem'
import { IconType } from 'react-icons'
import { PiPersonSimpleBikeBold } from 'react-icons/pi'
import { IoBody } from 'react-icons/io5'
import { MdSportsBaseball } from 'react-icons/md'


import {
  FaRunning,
  FaMedal,
  FaHeart,
} from 'react-icons/fa'

interface CategoriesProps {
  items: Category[]
}

const iconMap: Record<Category['name'], IconType> = {
  'Running Races': FaRunning,
  'Sports': MdSportsBaseball,
  'Fitness Races': FaMedal,
  'Health': FaHeart,
  'Bike Races': PiPersonSimpleBikeBold,
  'Body Composition': IoBody,
}

const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className='flex items-center gap-x-2 overflow-x-auto pb-2'>
      {items.map((item) => (
        <CategoryItem 
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}

export default Categories