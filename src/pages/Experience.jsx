export default function Experience() {
    const experiences = [
        {
            img: "/person.png",
            company: "Self-employed",
            location: "Navoiy, Uzbekistan",
            title: "Frontend Development",
            date: "2025 — Present",
            description:
                "Developing my frontend skills through courses, projects and hands-on practice.",
        },
        {
            img: "/sifat.jpg",
            company: "SIFAT",
            location: "Navoiy, Uzbekistan",
            title: "Frontend Developer",
            date: "2024 — 2025",
            description:
                "Building responsive web applications and portfolio projects using React, JavaScript and Tailwind CSS.",
        },
    ];

    return (
        <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-center">
                Experience
            </h1>
            <div className="w-full max-w-4xl mt-8 sm:mt-10 md:mt-14 space-y-5 sm:space-y-7 md:space-y-10">
                {experiences.map((experience) => (
                    <div key={experience.company} className=" group w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-6 md:p-8 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05]">
                        <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                            {experience.img && (
                                <div className="shrink-0">
                                    <img src={experience.img} alt={`${experience.company} logo`} className=" w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"/>
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <div className=" flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                                    <h3 className=" text-lg sm:text-xl md:text-2xl font-medium text-white break-words">
                                        {experience.company}
                                    </h3>
                                    <span className=" w-fit shrink-0 text-[10px] sm:text-xs font-mono text-white/50 border border-white/15 bg-white/5 px-2.5 sm:px-3 py-1 rounded-full">
                                        {experience.date}
                                    </span>
                                </div>
                                <p className=" text-cyan-300 text-xs sm:text-sm font-medium mt-2 sm:mt-3 leading-relaxed">
                                    {experience.title} · {experience.location}
                                </p>
                                <p className=" text-white/60 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-relaxed mt-2 sm:mt-3 max-w-xl">
                                    {experience.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}