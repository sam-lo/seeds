import Image from "next/image";
import logo from "../public/logo.png"
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <>
      <div className="absolute z-10 inset-x-0 mx-36 flex items-center justify-between py-4 px-8 bg-white rounded-b-3xl shadow-2xl shadow-green-900/40">
        <div className="flex gap-12 items-center">
          <a href="/">
            <Image className="h-16 w-16" src={logo} alt={"Logo of Seeds Financial Groups"}/>
          </a>
          <div className="flex text-xl gap gap-10 font-sans font-bold text-green-900">
            <div>
              About Us
            </div>
            <div>
              Careers
            </div>
            <div>
              Recent Event
            </div>
            <div>
              Case Studies
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-lg font-bold px-4 py-3 outline outline-green-800 outline-4 hover:bg-green-800 hover:text-white text-green-800 rounded-xl transition-all duration-300">
          <ChatBubbleBottomCenterTextIcon className="h-7 w-7"/>
          Contact Us
        </div>
      </div>
    </>
  )
}