const Vb2 = () => {

    return(
        <section id="services" className="max-w-7xl mx-auto w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3 items-center">
          <div className="flex flex-col justify-center space-y-4 items-center">
            <ConstructionIcon className="h-14 w-12 text-orange-400" />
              <div className="flex flex-col justify-center h-[64px]">
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl text-orange-400 text-center">CONSTRUCTION</h3>
              </div>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center line-clamp-5 min-h-[96px]">
              We provide high-quality construction services for a wide range of needs.
            </p>
          </div>
              <div className="flex flex-col justify-center space-y-4 items-center">
                <LandmarkIcon className="h-14 w-12 text-orange-400" />
                  <div className="flex flex-col justify-center h-[64px]">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl text-orange-400 text-center">DESIGN</h3>
                  </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center line-clamp-5 min-h-[96px]">
                   We create stunning interior designs that perfectly match your style.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 items-center">
                <HomeIcon className="h-14 w-12 text-orange-400" />
                  <div className="flex flex-col justify-center h-[64px]">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl text-orange-400 text-center">FURNISHING RESIDENTIAL & COMMECIAL PROPERTIES</h3>
                  </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center line-clamp-5 min-h-[96px]">
                  Providing furniture and decor for business spaces.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 items-center">
                <PlugIcon className="h-14 w-12 text-orange-400" /> 
                  <div className="flex flex-col justify-center h-[64px]">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl text-orange-400 text-center">INDUSRTIAL & RESIDENTIAL ELECTRIC WORK</h3>
                  </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center line-clamp-5 min-h-[96px]">
                  We provide safe and high-quality electrical services.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 items-center">
                <LightbulbIcon className="h-12 w-14 text-orange-400" /> 
                  <div className="flex flex-col justify-center h-[64px]">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl text-orange-400 text-center">INDUSTRIAL & RESIDENTIAL PLUMBING & SANITARY WORK </h3>
                  </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center line-clamp-5 min-h-[96px]">
                  Installation, maintenance, and repair of plumbing and sanitation systems
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 items-center">
                <RedoIcon className="h-14 w-12 text-orange-400" /> 
                  <div className="flex flex-col justify-center h-[64px]">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl text-orange-400 text-center">HVAC INSTALLATION & MAINTENANCE</h3>
                  </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center line-clamp-5 min-h-[96px]">
                Setup, repair, and upkeep of Heating, Ventilation, and (HVAC) systems
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 items-center lg:last:col-start-2 lg:last:col-end-3">
                <BuildingIcon className="h-14 w-12 text-orange-400" />
                  <div className="flex flex-col justify-center h-[64px]">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl text-orange-400 text-center">EQUIPMENT INSTALLATIONS & MAINTENANCE</h3>
                  </div>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center line-clamp-5 min-h-[96px]">
                  Setting up and ensuring the proper functioning of various types of machinery and equipment
                  </p>
              </div>
            </div>
          </div>
        </section>
    )
}



function BuildingIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    )
  }
  
  
  function ConstructionIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="6" width="20" height="8" rx="1" />
        <path d="M17 14v7" />
        <path d="M7 14v7" />
        <path d="M17 3v3" />
        <path d="M7 3v3" />
        <path d="M10 14 2.3 6.3" />
        <path d="m14 6 7.7 7.7" />
        <path d="m8 6 8 8" />
      </svg>
    )
  }
  
  
  function HomeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  function LandmarkIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" x2="21" y1="22" y2="22" />
        <line x1="6" x2="6" y1="18" y2="11" />
        <line x1="10" x2="10" y1="18" y2="11" />
        <line x1="14" x2="14" y1="18" y2="11" />
        <line x1="18" x2="18" y1="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    )
  }
  
  
  function LightbulbIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    )
  }
  
  
  function PlugIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
      </svg>
    )
  }
  
  
  function RedoIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 7v6h-6" />
        <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
      </svg>
    )
  }
  

export default Vb2;

