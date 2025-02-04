"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-6 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex justify-center">
          <Image
            src="/headshot.jpg"
            alt="Fede Martinez"
            width={400}
            height={400}
            className="rounded-full shadow-2xl border-4 border-teal-600"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hola, soy Fede!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Soy {" "}
            <span className="font-semibold text-teal-600">
              Analista
            </span>
            {" "} con base en San Juan, Argentina. Ayudo a empresas a optimizar sus procesos mediante automatización (RPA), análisis avanzado de datos. Tengo interés en las finanzas cuantitativas y la analítica de negocios, explorando cómo la tecnología puede ayudar a la gestión de las empresas y la operatoria bursátil.
          </p>
          <div className="flex justify-center md:justify-start"> 
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 transition-transform transform hover:scale-105"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Ver Proyectos
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center mt-10">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={55} className="animate-bounce text-teal-600" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection

