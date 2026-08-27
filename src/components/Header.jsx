import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-center px-3 py-4 sm:px-6 sm:py-5">
            <nav className="w-full max-w-fit px-4 py-3 sm:px-8 md:px-12 rounded-3xl bg-cyan-400/10 border border-cyan-300/20 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                <ul className="flex items-center justify-center gap-3 sm:gap-7 md:gap-10">
                    <li className="text-xs sm:text-sm md:text-base text-gray-300 transition-colors hover:text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-xs sm:text-sm md:text-base text-gray-300 transition-colors hover:text-white">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="text-xs sm:text-sm md:text-base text-gray-300 transition-colors hover:text-white">
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li className="text-xs sm:text-sm md:text-base text-gray-300 transition-colors hover:text-white">
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}