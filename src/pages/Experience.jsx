export default function Experience() {
    const experiences = [
        {
            img: "/person.png",
            company: "Self-Learning",
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
        <div className="flex flex-col items-center justify-center sm:px-8 md:py-15">

            <h2 className="text-4xl font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Experience
            </h2>

            <div className="space-y-10 mt-20 w-full max-w-4xl">
                {experiences.map((experience) => (
                    <div
                        key={experience.company}
                        className="group rounded-2xl border border-white/10
                        bg-white/[0.03] backdrop-blur-xl
                        p-6 md:p-8
                        transition duration-300
                        hover:border-cyan-300/30
                        hover:bg-white/[0.05]"
                    >
                        <div className="flex gap-6">
                            {experience.img && (
                                <div>
                                    <img
                                        src={experience.img}
                                        className="w-14 h-14 md:w-16 md:h-16
                                        rounded-full object-cover
                                        "
                                    />
                                </div>
                            )}

                            <div className="flex-1">

                                <div className="flex flex-col md:flex-row
                                    md:items-center md:justify-between
                                    gap-2 mb-1">

                                    <h3 className="text-xl md:text-2xl font-medium text-white">
                                        {experience.company}
                                    </h3>


                                    <span className="shrink-0 text-xs font-mono text-white/50 border border-white/15 bg-white/5 px-3 py-1 rounded-full">
                                        {experience.date}
                                    </span>

                                </div>

                                <p className="text-cyan-300 text-sm font-medium mt-0.5">
                                            {experience.title} · {experience.location}
                                        </p>

                                <p className="text-white/60 leading-relaxed mt-3 max-w-xl">
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