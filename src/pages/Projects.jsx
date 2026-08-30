import { projects } from "../data/projects"

export default function Projects() {

    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <h2 className="text-4xl font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Projects
            </h2>
            <div className="mt-15 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        onClick={() => window.location.href = project.link}
                        className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]"
                        />

                        <p className="mt-4 text-base font-semibold text-white sm:text-lg">
                            {project.title}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            View  →
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}