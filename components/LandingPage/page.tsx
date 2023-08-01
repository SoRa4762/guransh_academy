import { features, navBar } from "@/helper/data";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      {/* home section */}
      <div
        className="h-screen w-screen px-12 bg-slate-100"
        style={{
          background: `url("/mainBG.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-[12vh] flex">
          <div className="h-full w-full flex flex-1 justify-start items-end">
            <Image
              src="/logo1.jpg"
              alt="Guransh Academy Logo 1"
              height={100}
              width={100}
              className="rounded-full h-16 w-16"
            />
          </div>
          <div className="h-full w-full flex flex-[2] justify-between items-end text-lg text-slate-900 uppercase font-bold">
            {navBar.map((nav, index) => (
              <Link
                href={nav.link}
                className="cursor-pointer hover:border-b-4 hover:border-red-500"
                key={index}
              >
                {nav.navBarTitle}
              </Link>
            ))}
          </div>
          <div className="h-full w-full flex flex-1 justify-end items-end">
            <Image src="/next.svg" alt="Next Logo" height={100} width={100} />
          </div>
        </div>
        <div className="h-[88vh] flex flex-col">
          <div className="h-full w-full flex flex-col gap-12 justify-center items-center">
            <h1 className="lg:text-7xl font-bold text-yellow-500 lg:px-36 text-center">
              First{" "}
              <span className="border-b-[3.5px] border-dashed border-slate-900">
                Step
              </span>{" "}
              Towards Success!
            </h1>
            <p className="lg:text-xl font-normal text-slate-900 lg:px-80 text-center">
              "Our Montessori embraces each child's journey with trust and care,
              fostering a future of limitless possibilities where curiosity
              thrives and minds soar free."
            </p>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="h-full w-screen bg-white overflow-x-hidden">
        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`h-full w-full flex flex-col justify-center items-center ${
                feature.bg === "aqua" && "bg-cyan-500"
              } ${feature.bg === "red" && "bg-red-500"} ${
                feature.bg === "yellow" && "bg-yellow-500"
              }
              px-20 text-slate-50
              `}
            >
              <div className="h-[15vh] w-full flex flex-col justify-center items-center">
                <h1 className="lg:text-2xl font-semibold">{feature.title}</h1>
              </div>
              <div className="h-[20vh] w-full text-sm lg:text-base text-center">
                <h3 className="font-semibold text-lg">{feature.subTitle}</h3>
                <p className="mt-4">{feature?.date?.day1}</p>
                <p>{feature?.date?.day2}</p>
                <p>{feature?.date?.day3}</p>
                <p>{feature?.description}</p>
              </div>
              <div className="h-[20vh] w-full flex justify-center items-center">
                <Button className="uppercase rounded-none px-12 py-8 font-bold text-lg">
                  <Link href={feature.link}>{feature.button}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Us Section */}
      <div
        id="whyus"
        className="h-screen w-screen grid md:grid-cols-2 grid-cols-1 gap-32"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("/bg3_1.jpg")`,
          backgroundSize: "cover",
          // backgroundPosition: "top",
        }}
      >
        <div className="h-full w-full flex justify-center md:justify-end items-center">
          <h1 className="text-8xl font-bold text-slate-50">Why Us</h1>
        </div>
        <div className="h-full w-full flex justify-center md:justify-start items-center">
          <div className="h-96 w-96 bg-slate-950 rounded-full relative">
            <p className="flex h-full w-full items-center justify-center text-slate-50 text-xl font-bold pl-20 pr-24">
              "Nurturing minds, fostering growth – our Montessori is where young
              learners thrive."
            </p>
            <div
              className="h-32 w-32 flex justify-center items-center bg-red-600 rounded-full absolute cursor-pointer"
              style={{ top: `calc(50% - 4rem)`, right: `calc(0% - 3rem)` }}
            >
              <p className="text-7xl font-bold text-slate-50 cursor-pointer">
                ›
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section*/}
      <div
        id="programs"
        className="min-h-screen w-screen flex flex-col justify-center items-center bg-slate-100"
      >
        <h1 className="flex h-40 w-full items-center justify-center text-7xl font-bold text-slate-900">
          Programs
        </h1>
        <div className="grid grid-rows-2 gap-8 text-slate-50 font-bold">
          <div className="grid lg:grid-cols-5 grid-cols-3 gap-8">
            <div className="h-full w-full flex justify-center items-center">
              <p className="flex justify-center items-center bg-red-600 rounded-full h-40 w-40">
                Parent Infant
              </p>
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <p className="flex justify-center items-center bg-yellow-500 rounded-full h-28 w-28">
                Toddler
              </p>
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <p className="flex justify-center items-center bg-cyan-400 rounded-full h-36 w-36">
                Primary
              </p>
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <p className="flex justify-center items-center bg-slate-950 rounded-full h-48 w-48">
                Elementary
              </p>
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <p className="flex justify-center items-center bg-yellow-500 rounded-full h-36 w-36">
                English
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 lg:px-48">
            <div className="h-full w-full flex justify-center items-start md:items-center">
              <p className="h-48 w-48 flex justify-center items-center bg-slate-950 rounded-full">
                Physical Education
              </p>
            </div>
            <div className="h-full w-full flex justify-center items-start md:items-center">
              <p className="h-28 w-28 flex justify-center items-center bg-yellow-500 rounded-full">
                Nepali
              </p>
            </div>
            <div className="h-full w-full flex justify-center items-start md:items-center">
              <p className="h-48 w-48 flex justify-center items-center bg-red-600 rounded-full">
                Before & After Care
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Admissions Section */}
      <div
        id="admissions"
        className="h-screen w-screen grid md:grid-cols-2 grid-cols-1 md:gap-32"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("/bg2.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full flex justify-center md:justify-end items-center">
          <h1 className="text-8xl font-bold text-slate-50">Admissions</h1>
        </div>
        <div className="h-full w-full flex justify-center md:justify-start items-center">
          <div className="h-96 w-96 bg-yellow-400 rounded-full relative">
            <p className="flex h-full w-full items-center justify-center text-slate-50 text-xl font-bold pl-20 pr-24">
              "Unlocking a world of wonder, one child at a time. Join our
              Montessori journey today!"
            </p>
            <div
              className="h-32 w-32 flex justify-center items-center bg-cyan-400 rounded-full absolute"
              style={{ top: `calc(50% - 4rem)`, right: `calc(0% - 3rem)` }}
            >
              <p className="text-7xl font-bold text-slate-50">›</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="h-full w-screen flex px-64 py-24 justify-between items-center bg-black">
        <div className="flex flex-col justify-between gap-4 text-slate-50">
          <div className="flex flex-row gap-8">
            {navBar.map((item, index) => (
              <div key={index}>
                <Link href={item.link} className="font-bold text-lg">
                  {item.navBarTitle}
                </Link>
              </div>
            ))}
          </div>
          <p className="font-thin text-sm">
            &copy; Guransh Academy, All Rights Reserved.
          </p>
        </div>

        <div>
          <Image
            src="/logo2.jpg"
            alt="Logo 2"
            height={100}
            width={100}
            className="rounded-full h-20 w-20"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
