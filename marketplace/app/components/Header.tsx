import Image from "next/image"

export default function Header() {
    return (
        <div className="flex justify-between p-4 bg-green-200">
        <div className="logo bg-green flex">
        <img className="pr-1" src="https://icon-library.com/images/supermarket-icon-png/supermarket-icon-png-1.jpg"
        width={40}
        height={25}
        alt="Icon"/>
        <div className="flex-1">
            <a href="/" className="ntn btn-ghost text-4xl font-bold rounded p-1 font-ephesis">Jineepinee</a>
        </div>
        </div>
        
        <nav>
            <ul className=" flex gap-10">
                <li><a className="rounded-lg px-2 py-1 hover:bg-green-500 hover:text-white text-blue-800" href="#">Home</a></li>
                <li><a className="rounded-lg px-2 py-1 hover:bg-green-500 hover:text-white text-blue-800" href="#">About Us</a></li>
                <li><a className="rounded-lg px-2 py-1 hover:bg-green-500 hover:text-white text-blue-800" href="#">Our Deals</a></li>
                <li><a className="rounded-lg px-2 py-1 hover:bg-green-500 hover:text-white text-blue-800" href="#">Register</a></li>
            </ul>
        </nav>
        </div>
    )
}