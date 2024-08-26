"use client";
import Image from 'next/image';

const Vb4 = () => {
    const handleClick = () => {
        console.log("Learn More clicked");
    };

    return (
        <section id="about" className="bg-orange-100 py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-400">About Us</h2>
                <p className="text-md md:text-lg text-gray-500 text-justify">
                Master’s Team was founded in 2013 in Dubai, United Arab Emirates. Despite the young age of the company, it got strong reputation in the region. It was established by Eng. Usein Dzhapiesh with more than 20 years of experience in the Ukraine, Russia & United Arab Emirates. In previous 7 years he was in the position of General Manager working with leading contracting companies in the region.
                </p>
                
                <div 
                    className="self-start px-4 py-2 bg-orange-400 text-white rounded cursor-pointer hover:bg-orange-500"
                    onClick={handleClick}
                >
                    Learn More
                </div>
              </div>
              <div>
                <Image
                    alt="Construction work"
                    src="/biglogo.png"
                    width={600}
                    height={400}
                    objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      )
}

export default Vb4;