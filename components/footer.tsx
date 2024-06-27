import logo from "../public/logo.png"
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center bg-green-600 py-8 rounded-t-3xl shadow-2xl">
        <Image className={"w-24"} src={logo} alt={"Logo of Seeds Financial Groups"}/>

      </div>
    </>
  )
}