import { HiDesktopComputer, HiNewspaper, HiVideoCamera } from "react-icons/hi"
import {
	HiCubeTransparent,
} from "react-icons/hi2"

export function Services() {
	const services = [
		{
			title: "Design Gráfico",
			description: "Desenvolvo identidades visuais e materiais promocionais com foco na expressão da marca e impacto visual.",
			icon: <HiDesktopComputer className="h-12 w-12" />,
		},
		{
			title: "Motion Design",
			description: "Crio animações dinâmicas para vídeos e interfaces digitais, adicionando vida e fluidez à experiência do usuário.",
			icon: <HiVideoCamera className="h-12 w-12" />,
		},
		{
			title: "Design de Produto",
			description: "Conceitualizo e prototipo produtos, garantindo uma combinação harmoniosa entre forma, função e experiência do usuário.",
			icon: <HiCubeTransparent className="h-12 w-12" />,
		},
		{
			title: "Design Editorial",
			description: "Especializado na criação de layouts e diagramação, trago histórias e conceitos à vida em publicações impressas e digitais, priorizando uma experiência de leitura envolvente.",
			icon: <HiNewspaper className="h-12 w-12" />,
		},
	]

	return (
		<section className="container mx-auto my-12 max-w-4xl p-4">
			<div className="p-4 text-center">
				<p className="text-sm font-semibold uppercase text-blue-600">
					O que faço de melhor
				</p>
				<h2 className="mb-2 font-bold text-blue-900">
					<span className="mr-2 font-headline text-3xl">Meus</span>
					<span className="font-handwriting text-4xl">Serviços</span>
				</h2>
				<p className=" text-sm text-gray-600">
					Ofereço uma ampla gama de serviços de design, abrangendo desde a concepção até a implementação, com foco em diversas áreas, como design gráfico, motion, produto e editorial.
				</p>
			</div>

			<div className="mt-6 flex flex-col gap-2 md:flex-row">
				{services.map((service, index) => (
					<div
						className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
						key={`service-${index}`}
					>
						<div className="mb-2">{service.icon}</div>
						<h3 className="text-xl font-bold">{service.title}</h3>
						<p className="text-sm">{service.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}