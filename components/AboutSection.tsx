import React from "react";

const skills = [
  { skill: "Python" },
  { skill: "Anaconda" },
  { skill: "Tableau" },
  { skill: "PostgreSQL" },
  { skill: "Microsoft Excel" },
  { skill: "AWS" },
  { skill: "Google Cloud Platform" },
  { skill: "Git & Github" },
  { skill: "Docker" },
  { skill: "Automatización (RPA)" },
  { skill: "ETL & Data Pipelines" },
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
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              ¡Conóceme!
            </h1>
            <p>
              Estudio Economía y Administración en la Universidad de Congreso. Soy operador de bolsa desde 2020 y un entusiasta de la revolución de las criptomonedas.
            </p>
            <br />
            <p>
              En 2023, Co-fundé Optima Consulting & Management LLC, una empresa que se especializa en ciencia de datos aplicada a las finanzas. Además, ayudo a empresas a automatizar procesos administrativos y optimizar su uso de datos para mejorar la toma de decisiones.
            </p>
            <br />
            <p>
              Estoy comprometido con el 
              <span className="font-bold text-teal-500">
              {" aprendizaje permanente "}
              </span>
              ya que el crecimiento personal es un viaje que nunca termina. Mi pasión por la tecnología y mi deseo de siempre empujar los límites de lo posible me motivan día a día. Siempre estoy abierto a nuevas oportunidades y desafíos. 📊
            </p>
            <br  />
          </div>
          <div className="md:w-1/2">
            <div className="text-center md:w-full md:text-left">
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
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:w-full">
          <br />
          <h1 className="text-center text-2xl font-bold mb-6">
            ¿Cómo pueden mis habilidades ayudar a tu empresa?
          </h1>
          <p className="text-center">
            Ayudo a empresas a reducir costos y mejorar la eficiencia mediante la automatización de procesos (RPA), el análisis avanzado de datos y la implementación de soluciones de ETL para organizar información dispersa.
          </p>
          <br />
          <p className="text-center">
            Si necesitas mejorar la eficiencia operativa de tu empresa o transformar tus datos en insights accionables, no dudes en contactarme. Estoy aquí para ayudar.
          </p>
          <a
            href="mailto:fedemarti0107@gmail.com"
            className="inline-block mt-4 bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 transition-colors"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;


