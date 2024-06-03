import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Projects() {
  const projects = [
    {
      title: "Identidade Visual",
      description: "Identidade Visual - Marine",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/f7d737190031511.65b43c51a4657.png",
      link: "https://www.behance.net/gallery/190031511/Identidade-visual-MARINE",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto Visual",
      description: "Projeto Visual - Pé de Fruta",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/ee4613198987823.664a8bd85cb3e.png",
      link: "https://www.behance.net/gallery/198987823/Projeto-visual",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Ilustração",
      description: "Ilustração - Aurora Boreal",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/a4cf70198991551.664aac8b739d0.jpg",
      link: "https://www.behance.net/gallery/198991551/Ilustracao-Aurora-Boreal",
      colSpan: "col-span-1",
    },
    {
      title: "Livreto",
      description: "Livreto - O universo dos tipos",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/59363d163946117.63ee43a07a12f.png",
      link: "https://www.behance.net/gallery/163946117/Livreto",
      colSpan: "col-span-1",
    },
    {
      title: "Folder",
      description: "Folder - Síndrome Metabólica",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/d32595198854027.66479e172ccf9.png",
      link: "https://www.behance.net/gallery/198854027/FOLDER",
      colSpan: "col-span-1",
    },
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador Fullstack.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}