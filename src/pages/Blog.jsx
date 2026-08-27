import { Link } from "react-router-dom";

export default function Blog() {
    const posts = [
        {
            title: "What I took away from Spider-Man: Brand New Day",
            description:
                "A short reflection on letting go of the past, accepting endings, and understanding that moving forward doesn’t make the memories any less meaningful.",
            date: "August 12, 2026",
            category: "Reflection",
            readTime: "3 min read",
            slug: "spider-man-brand-new-day",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center sm:px-8 md:py-5">

            <h2 className="text-4xl font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Blog
            </h2>

            <div className="w-full max-w-4xl mt-10 sm:mt-12 md:mt-15">
                <section className="space-y-4 sm:space-y-5">

                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group block w-full"
                        >
                            <article className="
                                w-full
                                p-5 sm:p-6 md:p-8
                                rounded-2xl
                                bg-white/[0.03]
                                border border-white/10
                                backdrop-blur-xl
                                transition-all duration-300
                                hover:border-cyan-300/30
                                hover:bg-white/[0.05]
                                hover:-translate-y-1
                            ">

                                <div className="
                                    flex flex-wrap
                                    items-center
                                    gap-2 sm:gap-3
                                    text-[10px] sm:text-xs
                                    text-gray-500
                                    mb-4 sm:mb-5
                                ">
                                    <span>{post.date}</span>

                                    <span className="w-1 h-1 rounded-full bg-gray-600" />

                                    <span>{post.category}</span>

                                    <span className="w-1 h-1 rounded-full bg-gray-600" />

                                    <span>{post.readTime}</span>
                                </div>

                                <div className="flex items-start justify-between gap-4 sm:gap-6">

                                    <div className="min-w-0">

                                        <h2 className="
                                            text-lg
                                            sm:text-xl
                                            md:text-2xl
                                            font-semibold
                                            text-cyan-300
                                            leading-snug
                                        ">
                                            {post.title}
                                        </h2>

                                        <p className="
                                            mt-2 sm:mt-3
                                            text-sm sm:text-base
                                            text-gray-400
                                            leading-6 sm:leading-7
                                            max-w-2xl
                                        ">
                                            {post.description}
                                        </p>

                                    </div>

                                    <span className="
                                        hidden sm:block
                                        shrink-0
                                        text-xl
                                        text-gray-500
                                        transition-all duration-300
                                        group-hover:text-cyan-300
                                        group-hover:translate-x-1
                                    ">
                                        →
                                    </span>

                                </div>

                            </article>
                        </Link>
                    ))}

                </section>
            </div>
        </div>
    );
}