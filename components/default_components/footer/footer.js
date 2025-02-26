import Image from 'next/image'
import Link from "next/link"

export default function Component() {
  return (
    <footer id="contact" className="bg-orange-400 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 md:space-y-12">
          <Link href="#">
            <Image
              alt="Company Logo"
              className="overflow-hidden rounded-lg"
              layout="fixed"
              height={100}
              src="/biglogo.png"
              width={100}
            />
          </Link>
          <div className="text-center space-y-2">
            <p className="text-lg">*************************************</p>
            <p className="text-lg">Tel: **-*** ****</p>
            <p className="text-lg">Mob: ***-*** ****</p>
            <p className="text-lg">*******.3935@gmail.com</p>
            <p className="text-lg">********@gmail.com</p>
            <p className="text-lg">**********@gmail.com</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>

  )
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}