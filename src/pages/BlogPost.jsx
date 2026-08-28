import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts.jsx";

export default function BlogPost() {
    const { slug } = useParams();

    const post = posts.find((post) => post.slug === slug);

    return (
        <main className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <article className="w-full max-w-3xl mx-auto">
                <Link to="/blog" className="inline-block text-xs sm:text-sm text-gray-500 hover:text-cyan-300 transition">
                    ← Back to Blog
                </Link>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mt-7 sm:mt-10 text-[10px] sm:text-xs text-gray-500">
                    <span>{post.date}</span>

                    <span className="w-1 h-1 rounded-full bg-gray-600 shrink-0" />

                    <span>{post.category}</span>

                    <span className="w-1 h-1 rounded-full bg-gray-600 shrink-0" />

                    <span>{post.readTime}</span>
                </div>
                <h1 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight break-words">
                    {post.title}
                </h1>
                <div className="mt-7 sm:mt-10 space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-400 leading-7 sm:leading-8">
                    {post.content}
                </div>

            </article>
        </main>
    );
}