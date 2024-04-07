'use client'

import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Fragment,} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { cn } from '@/lib/utils'

const founder = [
  {
    name: 'Jimmy Lindsey, MA, CSCS, SCCC',
    avatar: '/headshot.jpg',
    title: 'Founder',
    role1: 'Exercise Physiologist',
    role2: 'Sport Scientist',
    role3: 'Athletic Performance Coach',
    role4: 'Software Engineer',
    location: 'Los Angeles, CA'
  },
]

const About = () => {
  return (
    <div className='mt-20'>
      <h1 className='pl-6 pr-6 my-8 text-2xl font-bold'>
        About
      </h1>
      <div className='pl-6 pr-6 grid lg:grid-cols-3 text-sm gap-4'>
        <div className='lg:col-span-1 md:col-span-3 sm:col-span-3'>
        {founder.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-xl border border-gray-200">
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-12 w-12 flex-none rounded-full bg-white object-cover ring-1 ring-gray-900/10"
                  />
                  <div className="text-sm font-medium leading-6 text-gray-900">{item.name}</div>
                  <Menu as="div" className="relative ml-auto">
                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Open options</span>
                      <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a 
                              target='_blank'
                              href="https://www.instagram.com/themusclephysio/"
                              className={cn(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              Instagram<span className="sr-only">, {item.name}</span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a 
                              target='_blank'
                              href="https://www.tiktok.com/@themusclephysio"
                              className={cn(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              TicTok<span className="sr-only">, {item.name}</span>
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                  <div className="flex justify-between gap-x-4 py-3">
                    <dd className="text-gray-700">
                      {item.role1}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-x-4 py-3">
                    <dd className="text-gray-700">
                      {item.role2}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-x-4 py-3">
                    <dd className="text-gray-700">
                      {item.role3}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-x-4 py-3">
                    <dd className="text-gray-700">
                      {item.role4}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
        </div>
        <div className='lg:col-span-2 md:col-span-3 sm:col-span-3'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle>
                <div className='text-lg font-bold'>
                  General Information
                </div>
                <div className='text-base font-bold mt-4'>
                  About HTTF
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-sm text-slate-600'>
                I created HTTF to educate, inform, and inspire you as you navigate your journey to personal transformation.
              </div>
            </CardContent>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle>
                <div className='text-base font-bold'>
                  About me
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-3'>
                <p className='text-sm text-slate-600'>
                  I am a follower of Jesus, husband, father, athlete, and coach. Growing up, I played soccer, baseball, football, basketball, and video games. Mostly video games. I excelled at basketball and was selected to the Charlotte Pro-Am team as a senior in high school.
                </p>
                <p className='text-sm text-slate-600'>
                  I studied business administration and computer science at East Carolina University. During my time there, I won an intramural basketball championship, founded a club basketball team, and joined professional business fraternities. During my brief tenure as an accountant, I swiftly realized that my gifts, talents, and abilities were better aligned with the application and teaching of athletic performance.
                </p>
                <p className='text-sm text-slate-600'>
                  I began my career in athletics working alongside athletic trainers, physical therapists, and strength and conditioning coaches while also studying athletic training at the University of North Carolina at Charlotte. I then went to Columbia University where I received my Masters Degree in Applied Physiology. For the last fifteen years I have worked in Physical Education, Physical Therapy, Strength and Conditioning, Technology, and Workforce Wellness.
                </p>
                <p className='text-sm text-slate-600'>
                  I currently live in Los Angeles with my wife and two daughters.
                </p>
              </div>
              <div className='mt-6'>
                <div>
                  <p className='font-medium mb-2'>
                    Education
                  </p>
                  <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-10">                  
                    <li className="mb-6 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">2002</time>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">Northwest Cabarrus High School</h3>
                    </li>
                    <li className="mb-6 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">2007</time>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">East Carolina University</h3>
                      <p className='text-sm'>BSBA Management Accounting</p>
                    </li>
                    <li className="mb-6 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">2011</time>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">University of North Carolina at Charlotte</h3>
                      <p>BS Athletic Training</p>
                    </li>
                    <li className="mb-6 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">2014</time>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">Columbia University</h3>
                      <p>MA Applied Physiology</p>
                    </li>
                  </ol>
                </div>
                <div>
                  <p className='font-medium mb-2'>
                    Certifications
                  </p>
                  <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-10">     
                    <li className="mb-6 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">Collegiate Strength and Conditioning Coaches Association</h3>
                      <p>Strength and Conditioning Coach Certified</p>
                    </li>          
                    <li className="mb-6 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">National Strength and Conditioning Association</h3>
                      <p className='text-sm'>Certified Strength and Conditioning Specialist</p>
                    </li>
                    <li className="mb-6 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">National Academy of Sports Medicine</h3>
                      <p className='text-sm'>Corrective Exercise Specialist</p>
                    </li>
                    <li className="mb-6 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">Precision Nutrition</h3>
                      <p>Level 1</p>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='mt-40'>
        <Footer />
      </div>
    </div>
  )
}

export default About