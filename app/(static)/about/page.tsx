import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Briefcase, MapPin } from 'lucide-react'

const About = () => {
  return (
    <div className='mt-20'>
      <h1 className='pl-6 pr-6 text-2xl font-bold'>
        About
      </h1>
      <div className='pl-6 pr-6 mt-10 grid lg:grid-cols-3 text-sm gap-4'>
        <div className='lg:col-span-1 md:col-span-3 sm:col-span-3'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle>
                <div className='text-lg font-bold'>
                  Jimmy Lindsey, MA
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex items-center gap-x-1 text-slate-500 mt-3'>
                <Briefcase className='h-5 w-5'/>
                Athletic Performance Coach | Exercise Physiologist
              </div>
              <div className='flex items-center gap-x-1 text-slate-500 mt-3'>
                <MapPin className='h-5 w-5'/>
                Los Angeles, CA
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='lg:col-span-2 md:col-span-3 sm:col-span-3'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle>
                <div className='text-lg font-bold'>
                  General Information
                </div>
                <div className='text-base font-bold mt-4'>
                  About me
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-sm text-slate-600'>
                Jimmy is an experienced Athletic Performance Coach and Exercise Physiologist. Jimmy studied Business Administration and Computer Science at East Carolina University. He began his career in Athletics working alongside Athletic Trainers and Physical Therapists while studying Athletic Training at the University of North Carolina at Charlotte. Jimmy then went to Columbia University where he earned his Masters Degree in Applied Exercise Physiology. During this time, he was a student teacher of physical education at various private schools in New York City and served as a coordinator for the Jr. Knicks basketball program.
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
                      <p className='text-sm'>BSBA Management Accounting, Minor Computer Science</p>
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
                      <p>MA Applied Exercise Physiology</p>
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
                      <p>Certified Performance and Sport Scientist</p>
                    </li>  
                    <li className="mb-6 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">American College of Sports Medicine</h3>
                      <p>Certified Clinical Exercise Physiologist</p>
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