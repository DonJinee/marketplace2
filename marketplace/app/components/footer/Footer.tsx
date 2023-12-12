import Link from "next/link"
import Container from "../Container"
import FooterList from "./FooterList"
import {MdFacebook} from 'react-icons/md'
import {AiFillTwitterCircle, AiFillInstagram, AiFillYoutube, AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2 text-gray-400">Shop Categories</h3>
            <Link href='#'>Cart</Link>
            <Link href='#'>Gaming</Link>
            <Link href='#'>Gadgets</Link>
            <Link href='#'>Fashion</Link>
            <Link href='#'>Children</Link>
            <Link href='#'>Home Needs</Link>
            <Link href='#'>Office Needs</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2 text-gray-400">Customer Services</h3>
            <Link href='#'>Contact Us</Link>
            <Link href='#'>Shipping Policy</Link>
            <Link href='#'>Returns & Exchanges</Link>
            <Link href='#'>FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-base font-bold mb-2 text-gray-400">About Us</h3>
          <p className="mb-2">
            At our electronic store, we are dedicated to providing the latest and greatest devices 
            and accessories to our customers. 
            We offer a wide selection of phones, TVs, laptops, watches, and accessories.
          </p>
          <p>&copy;{new Date().getFullYear()} <span className="font-ephesis font-bold">Jineepinee</span>. All rights reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2 text-gray-400">Follow Us</h3>
            <div className="flex gap-2">
              <Link href='#'><MdFacebook size={24}/></Link>
              <Link href='#'><AiFillTwitterCircle size={24}/></Link>
              <Link href='#'><AiFillInstagram size={24}/></Link>
              <Link href='#'><AiFillYoutube size={24}/></Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer