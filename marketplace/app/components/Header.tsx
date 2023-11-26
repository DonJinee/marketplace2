import Image from "next/image"

export default function Header() {
    return (
        <>
        <div className="logo bg-green">
        <img className="inline-block" src="https://icon-library.com/images/supermarket-icon-png/supermarket-icon-png-1.jpg"
        width={50}
        height={50}/>
        <h2 className="text-4xl inline">Jineepinee</h2>
        </div>
        
        <nav>
            <ul className=" w-1/2">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Deals</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </nav>
        </>
    )
}