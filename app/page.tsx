import tree from "../public/TREE.jpg"
import Image from "next/image";
import {AcademicCapIcon, HomeModernIcon, CakeIcon, BuildingOffice2Icon, GlobeEuropeAfricaIcon, ClockIcon} from "@heroicons/react/24/solid";

export default function Home() {

  const types = [
    {
      id: 1,
      title: "Critical illness Protection",
      description: "Critical illness can strike when you least expect it, placing a heavy financial burden on the whole family",
      icon: HomeModernIcon
    },
    {
      id: 2,
      title: "Education Plan",
      description: "Education Plan is designed with a specific goal in mind – financing your child’s higher education",
      icon: AcademicCapIcon
    },
    {
      id: 3,
      title: "Annuity Plan",
      description: "A stable guaranteed annuity income stream that you can rely on for your retirement is a must .",
      icon: CakeIcon
    },
    {
      id: 4,
      title: "Medical Protection ",
      description: "In view of rising medical expenses, it is important for you and your family to have adequate hospitalisation protection",
      icon: BuildingOffice2Icon
    },
    {
      id: 5,
      title: "Travel Insurance ",
      description: "A world of adventure is out there, waiting to be explored. Take iTravel Protect with you for worldwide travel protection that covers all your essential needs.",
      icon: GlobeEuropeAfricaIcon
    },
    {
      id: 6,
      title: "Life Insurance",
      description: "Life is unpredictable. As a breadwinner, you will always worry about the wellbeing of your family when mishap unexpectedly happens.",
      icon: ClockIcon
    }
  ]

  return (
    <>
      <div className="relative">
        <Image className="brightness-50 rounded-b-3xl shadow-2xl" src={tree} alt={"Photo by Casey Horner"}/>
        <div
          className="absolute place-self-center flex flex-col text-center gap-4 font-bold inset-0 text-white scale-125">
          <div className="text-8xl">
            We Grow Big People
          </div>
          <div className="text-4xl">
            Seeds Financial Groups
          </div>
        </div>
      </div>
      <div className="m-24 flex gap-12 justify-center flex-wrap">
        {types.map((type) => (
          <div key={type.id}
               className="bg-white grid gap-3 w-[28rem] p-8 rounded-3xl shadow-2xl shadow-green-900/40 hover:scale-105 transition-all duration-700 hover:rotate-2">
            <type.icon className="h-16 w-16 text-green-800"/>
            <div className="text-3xl font-bold">
              {type.title}
            </div>
            <div className="text-wrap">
              {type.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

