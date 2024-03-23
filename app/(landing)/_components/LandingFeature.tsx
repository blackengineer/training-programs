const products = [
  {
    description: 'Choose your course',
    imageSrc: '/choose.png',
    imageAlt: 'Choose your course.',
  },
  {
    description: 'Train your body',
    imageSrc: '/train.png',
    imageAlt: 'Train your body.',
  },
  {
    description: 'Compete with confidence',
    imageSrc: '/choose.png',
    imageAlt: 'Compete with confidence',
  },
]

export default function Example() {
  return (
    <div className="bg-white border-t">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-500">Product</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.description} className="group">
                <div className="mt-4 mb-4 flex items-center justify-center text-base font-semibold text-gray-900">
                  <h2 className='text-xl'>{product.description}</h2>
                </div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
