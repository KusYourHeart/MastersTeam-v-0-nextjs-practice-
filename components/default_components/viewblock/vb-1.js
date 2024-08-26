
import Link from 'next/link'

const Vb1 = () => {

    return(
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 bg-orange-100">
          <div className="max-w-7xl mx-auto container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-orange-400">
                Masters Team Technical Services LLC Prequalification
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We turn your architectural dreams into reality. Explore our services today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-orange-400 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
    )
}


export default Vb1;