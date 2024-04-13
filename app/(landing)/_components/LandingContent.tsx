'use client'

import { cn } from '@/lib/utils'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

const testimonials = [
  {
    name: 'Dona',
    sport: 'Running',
    course: 'Marathon',
    avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Marathoner',
    description: 'I run three marathons every year!',
    stat1: '',
    previousStat1: '',
    stat1ChangeType: 'increase',
    stat1Change: '',
    stat2: '',
    previousStat2: '',
    stat2ChangeType: 'decrease',
    stat2Change: '',
  },
  {
    name: 'Mehdi',
    sport: 'Surfing',
    course: 'Lean Mass',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Surfer',
    description: 'I am hitting waves that I could not hit before How to train for!',
    stat1: '',
    previousStat1: '',
    stat1ChangeType: 'increase',
    stat1Change: '',
    stat2: '',
    previousStat2: '',
    stat2ChangeType: 'increase',
    stat2Change: '',
  },
  {
    name: 'Kim',
    sport: 'Swimming',
    course: 'Swimming',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Swimmer',
    description: 'I am so much faster in the water after training with HTTF!',
    stat1: '',
    previousStat1: '',
    stat1ChangeType: 'increase',
    stat1Change: '',
    stat2: '',
    previousStat2: '',
    stat2ChangeType: 'decrease',
    stat2Change: '',
  }
]

const LandingContent = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-500">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have coached some amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((item) => (
              <div key={item.description} className="overflow-hidden rounded-xl border border-gray-200">
              <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-12 w-12 flex-none rounded-full bg-white object-cover ring-1 ring-gray-900/10"
                />
                <div className="text-sm font-medium leading-6 text-gray-900">{item.name}</div>
              </div>
              <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-3">
                  <dd className="text-gray-700">
                    Sport: {item.sport}
                  </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                  <dd className="text-gray-700">
                    Course: {item.course}
                  </dd>
                </div>
                
                <div className="flex justify-between gap-x-4 py-3">
                  <dd className="text-gray-700">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      {item.stat1}
                      <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat1}</span>
                    </div>

                    <div
                      className={cn(
                        item.stat1ChangeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-green-100 text-green-800',
                        'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                      )}
                    >
                      {item.stat1ChangeType === 'increase' ? (
                        <ArrowUpIcon
                          className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowDownIcon
                          className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                          aria-hidden="true"
                        />
                      )}

                      <span className="sr-only"> {item.stat1ChangeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                      {item.stat1Change}
                    </div>
                  </dd>
                </div>

                <div className="flex justify-between gap-x-4 py-3">
                  <dd className="text-gray-700">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      {item.stat2}
                      <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat2}</span>
                    </div>

                    <div
                      className={cn(
                        item.stat2ChangeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-green-100 text-green-800',
                        'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                      )}
                    >
                      {item.stat2ChangeType === 'increase' ? (
                        <ArrowUpIcon
                          className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowDownIcon
                          className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                          aria-hidden="true"
                        />
                      )}

                      <span className="sr-only"> {item.stat2ChangeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                      {item.stat2Change}
                    </div>
                  </dd>
                </div>

                <div className="flex justify-between gap-x-4 py-3">
                  <dd className="text-gray-700">
                    {item.description}
                  </dd>
                </div>

              </dl>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingContent