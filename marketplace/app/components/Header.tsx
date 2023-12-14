import Image from "next/image"
import Container from "./Container"
import Link from "next/link"

export default function Header() {
    return (
        <div className="bg-green-200">
            <Container>        
                <div className="flex justify-between p-4">
                <div className="navbar bg-green-200">
                <div className="flex-1">
                    <div className="logo bg-green flex">
                    <Image className="pr-1" src="https://icon-library.com/images/supermarket-icon-png/supermarket-icon-png-1.jpg"
                        width={40}
                        height={25}
                        alt="Icon"/>
                    <div className="flex-1">
                        <a href="/" className="ntn btn-ghost text-4xl font-bold rounded p-1 font-ephesis">Jineepinee</a>
                    </div>
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <Image alt="Jineepinee navbar" src="https://www.flaticon.com/free-icon/profile_2956826?term=people&page=1&position=94&origin=tag&related_id=2956826" />
                        </div>
                    </div>
                    <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link className="hover:bg-green-500 hover:text-white text-blue-800" href="#">Home</Link></li>
                        <li><Link className="hover:bg-green-500 hover:text-white text-blue-800" href="#">About Us</Link></li>
                        <li><Link className="hover:bg-green-500 hover:text-white text-blue-800" href="#">Our Deals</Link></li>
                        <li><Link className="hover:bg-green-500 hover:text-white text-blue-800" href="#">Register</Link></li>
                    
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </Container>
    </div>
    )
}