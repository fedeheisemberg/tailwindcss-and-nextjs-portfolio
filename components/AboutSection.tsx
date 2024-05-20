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
          Sobre mí
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Ven a conocerme!
            </h1>
            <p>
            Estudio Economía y Administración en la Universidad de Congreso y desde entonces he estado aplicando activamente mis conocimientos. Soy operador de bolsa desde 2020 y un entusiasta de la revolución de las criptomonedas. Además, cofundé Optima Consulting & Management LLC, una empresa que se especializa en ciencia de datos aplicada a las finanzas.
            </p>
            <br />
            <p>
            Tengo una amplia gama de hobbies y pasiones que me mantienen ocupado y en constante aprendizaje. Mis actividades van desde leer y jugar videojuegos hasta viajar y crear contenido para YouTube. Mi curiosidad innata me impulsa a explorar nuevos horizontes y adquirir habilidades en diversas áreas.
            </p>
            <br />
            <p>
              Estoy comprometido con el {" "}
              <span className="font-bold text-teal-500">
              aprendizaje permanente
              </span>{" "}
              ya que el crecimiento personal es un viaje que nunca termina. Mi pasión por la tecnología y mi deseo de siempre empujar los límites de lo posible me motivan día a día. Siempre estoy abierto a nuevas oportunidades y desafíos. 🙂
            </p>
            <p>
            Si necesitas ayuda o asesoramiento en algún tema, no dudes en contactarme.
            </p>
            <a
              href="mailto:fedemarti0107@gmail.com"
              className="inline-block mt-4 bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 transition-colors"
            >
              Contáctame
            </a>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              ))}
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

