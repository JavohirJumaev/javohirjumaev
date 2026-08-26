export default function Header() {
    return (
        <header className="flex justify-center px-4 py-5 sm:px-6">
            <nav className="w-fit px-20 py-3 rounded-3xl bg-cyan-400/10 border border-cyan-300/20 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.15)] sm:px-12 md:px-16">
                <ul className="flex items-center justify-center gap-5 sm:gap-8 md:gap-12">
                    <li className="cursor-pointer text-sm text-gray-300 transition-colors hover:text-white sm:text-base">
                        Home
                    </li>
                    <li className="cursor-pointer text-sm text-gray-300 transition-colors hover:text-white sm:text-base">
                        Projects
                    </li>
                    <li className="cursor-pointer text-sm text-gray-300 transition-colors hover:text-white sm:text-base">
                        Experience
                    </li>
                    <li className="cursor-pointer text-sm text-gray-300 transition-colors hover:text-white sm:text-base">
                        Blog
                    </li>
                </ul>
            </nav>
        </header>
    );
}