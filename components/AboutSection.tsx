import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Anaconda" },
  { skill: "Tableu" },
  { skill: "PostgreSQL" },
  { skill: "Microsoft Excel" },
  { skill: "Jupyter Notebooks" },
  { skill: "AWS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Docker" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre mi
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Ven a conocerme!
            </h1>
            <p>
              Hola, mi nombre es Federico y soy {" "}
              <span className="font-bold">{"un altamente dedicado analista "}</span>
              radicado en San Juan, Argentina.
            </p>
            <br />
            <p>
              Estudio Economía y Administración en Universidad de Congreso y he estado aplicando mis conocimientos desde entonces.
            </p>
            <br />
            <p>
            Tengo una amplia gama de hobbies y pasiones que me mantienen ocupado. Desde leer, jugar videojuegos, viajar, hasta hacer videos en YouTube, soy extremadamente autodidacta y amo aprender cosas nuevas.
            </p>
            <br />
            <p>
              Creo que {" "}
              <span className="font-bold text-teal-500">
              nunca debes dejar de crecer
              </span>{" "}
              y eso es lo que me esfuerzo por hacer. Tengo una pasión por la tecnología y un deseo de siempre empujar los límites de lo que es posible. Siempre estoy abierto a nuevas oportunidades. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
