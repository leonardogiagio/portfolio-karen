import { HiDownload } from "react-icons/hi";

export function Hero() {
	return (
		<section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
			<div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
				<div className="basis-1/2">
					<h1 className="mb-6 text-center md:text-left">
						<span className="font-handwriting block text-3xl text-center md:text-left">
							Olá, me chamo
						</span>
						<span className="font-headline text-5xl font-semibold">
							Karen
						</span>
						<span className="font-headline text-5xl font-light text-blue-400 block md:inline-block">
							Gonçalves
						</span>
					</h1>

					<h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
						<div className="h-1 w-12 rounded-full bg-blue-800"></div>
						Designer (gráfico, motion, produto e editorial)
					</h2>

					<p className="text-gray-400 my-6 text-center md:text-left">
						Designer apaixonada por criar experiências visuais impactantes e intuitivas em todas as plataformas. 
						Especialista em design de interfaces, identidade visual e desenvolvimento de produtos que encantam e engajam os usuários, 
						transformando ideias em realidade através de soluções criativas e inovadoras.
					</p>

					<div className="flex items-center gap-2 justify-center md:justify-start">
						<a href="#contact" className="underline font-bold text-white">
							Fale Comigo
						</a>

						<span className="italic text-gray-500">ou</span>

						<a
							href="./curriculo2024.pdf"
							target="_blank"
							className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
						>
							<HiDownload />
							Baixe meu CV
						</a>
					</div>
				</div>
				<div className="basis-1/2"></div>
			</div>
		</section>
	);
}
