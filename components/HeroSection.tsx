"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hola, Soy Fede!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Soy{" "}
            <span className="font-semibold text-teal-600">
              Financial Data Analyst{" "}
            </span>
            radicado en San Juan, Argentina. Estoy intrigado por descubrir cómo la tecnología puede revolucionar el mundo financiero. Mi objetivo es crear soluciones tecnológicas innovadoras que capaciten a las personas para gestionar sus finanzas de forma más inteligente y eficiente. Quiero ayudar a las personas a alcanzar sus metas financieras con confianza y seguridad, brindándoles herramientas poderosas que les permitan tomar decisiones informadas y controlar su futuro financiero.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Proyectos
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
