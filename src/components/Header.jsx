export default function Header() {
    return (
        <header className="flex justify-center px-4 py-5 sm:px-6">
            <nav
                className="
                    w-full max-w-2xl
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    px-4 py-3
                    backdrop-blur-xl
                    shadow-[0_0_30px_rgba(255,255,255,0.05)]
                    sm:px-8
                    md:px-12
                "
            >
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