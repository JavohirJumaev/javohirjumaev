export default function Home() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind",
        "TypeScript",
        "Next.js",
        "MUI",
    ];

    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center sm:px-8">
            
            <h1 className="text-4xl font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Javohir Jumaev
            </h1>

            <div className="mt-4 sm:mt-5">
                <p className="text-sm font-black text-cyan-300 sm:text-base">
                    Frontend Developer
                </p>
            </div>

            <div className="mt-5 w-full max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                <p>
                    I'm a frontend developer passionate about building clean,
                    modern, and responsive websites. I work with JavaScript,
                    React, Tailwind CSS, and I'm currently exploring Next.js.
                    I enjoy turning ideas into functional and visually polished
                    experiences.
                </p>
            </div>

            <div className="mt-6 w-full max-w-2xl">
                <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-sm transition hover:bg-white/10 sm:px-4 sm:py-2 sm:text-sm"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}