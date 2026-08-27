import { Link, useParams } from "react-router-dom";

export default function BlogPost() {
    const { slug } = useParams();

    const posts = {
        "spider-man-brand-new-day": {
            title: "What I took away from Spider-Man: Brand New Day",
            date: "August 27, 2026",
            category: "Reflection",
            readTime: "1 min read",

            content: (
                <>
                    <p>
                        Sometimes, you have to let go of the past instead of trying to bring it back. Not everything meaningful in your life is meant to stay forever. You can lose people, relationships, friendships or entire chapters of your life and that doesn't make those moments meaningless.

                        You don't need everyone to remember you to know who you are. Your actions, choices and the person you become matter more than whether someone remembers your place in their story.

                        And maybe the hardest lesson: you can love someone and still choose to move forward without them. Some chapters end. That doesn't mean the story does.
                    </p>
                </>
            ),
        },
    };

    const post = posts[slug];

    return (
        <main className="
            w-full
            sm:px-8 md:py-5
        ">
            <article className="max-w-3xl mx-auto">

                <Link
                    to="/blog"
                    className="
                        text-sm
                        text-gray-500
                        hover:text-cyan-300
                        transition
                    "
                >
                    ← Back to Blog
                </Link>

                <div className="
                    flex flex-wrap
                    items-center
                    gap-2 sm:gap-3
                    mt-10
                    text-xs
                    text-gray-500
                ">
                    <span>{post.date}</span>

                    <span className="w-1 h-1 rounded-full bg-gray-600" />

                    <span>{post.category}</span>

                    <span className="w-1 h-1 rounded-full bg-gray-600" />

                    <span>{post.readTime}</span>
                </div>

                <h1 className="
                    mt-5
                    text-3xl
                    font-black
                    text-white
                    leading-tight
                ">
                    {post.title}
                </h1>

                <div className="
                    mt-10
                    space-y-6
                    text-gray-400
                    text-base
                    sm:text-lg
                    leading-8
                ">
                    {post.content}
                </div>

            </article>
        </main>
    );
}