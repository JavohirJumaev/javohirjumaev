

export default function Header() {
    return (
        <div className=" flex justify-center m-5">
            <nav className=" w-fit px-20 py-3 rounded-3xl
                bg-cyan-400/10
                border border-cyan-300/20
                backdrop-blur-xl
                shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                    <ul className="flex items-center gap-15">
                        <li className="cursor-pointer text-cyan-300 hover:text-cyan-200 transition-colors">
                            Home
                        </li>
                        <li className="cursor-pointer text-cyan-300 hover:text-cyan-200 transition-colors">
                            Projects
                        </li>
                        <li className="cursor-pointer text-cyan-300 hover:text-cyan-200 transition-colors">
                            Experience
                        </li>
                        <li className="cursor-pointer text-cyan-300 hover:text-cyan-200 transition-colors">
                            Blog
                        </li>
                    </ul>
            </nav>
        </div>
    );
}