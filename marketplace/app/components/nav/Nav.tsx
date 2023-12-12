import Link from "next/link"
import Container from "../Container"
import Image from "next/image"

const Nav = () => {
  return (
    <div className="
    sticky
    top-0
    w-full
    bg-green-200
    z-30
    shadow-sm
    ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="
            flex
            items-center
            justify-between
            gap-3
            md:gap-0
          ">
            <div className="logo bg-green flex hover:scale-105">
                    <Image className="pr-1" src="https://icon-library.com/images/supermarket-icon-png/supermarket-icon-png-1.jpg"
                        width={40}
                        height={25}
                        alt="Icon"/>
                    <div className="flex-1">
                        <Link href="/" className=" text-4xl font-bold 
                        rounded p-1 font-ephesis ">Jineepinee</Link>
                    </div>
            </div>
            <div className="hidden md:block">Search bar</div>
            <div className="flex items-center gap-8 md:gap-12">
                    <div><Link className="py-2 px-4 rounded-box hover:bg-green-900 hover:text-white text-blue-800" href="#">Home</Link></div>
                    <div><Link className="py-2 px-4 rounded-box hover:bg-green-900 hover:text-white text-blue-800" href="#">About Us</Link></div>
                    <div><Link className="py-2 px-4 rounded-box hover:bg-green-900 hover:text-white text-blue-800" href="#">Our Deals</Link></div>
                    <div><Link className="py-2 px-4 rounded-box hover:bg-green-900 hover:text-white text-blue-800" href="#">Register</Link></div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Nav