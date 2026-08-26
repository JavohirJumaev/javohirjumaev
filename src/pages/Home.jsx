
export default function Home(){
    return(
        <div className="flex flex-col justify-center items-center mt-[10%]">
            <div className="text-white font-black text-7xl">
                Javohir Jumaev
            </div>
            <div className="mt-5">
                <p className="text-cyan-300 font-black">Frontend Developer</p>
            </div>
            <div className="w-200 flex text-center text-gray-400 mt-5">
                <p>I'm a frontend developer passionate about building clean, modern, and responsive websites. I work with JavaScript, React, Tailwind CSS, and I'm currently exploring Next.js. I enjoy turning ideas into functional and visually polished experiences.</p>
            </div>
            <div className="mt-5">
                <ul className="flex flex-wrap gap-3">
                    <li className="rounded-full border border-white-10 bg-white-5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm cursor-pointer">
                        HTML
                    </li>

                    <li className="rounded-full border border-white-10 bg-white-5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm cursor-pointer">
                        CSS
                    </li>

                    <li className="rounded-full border border-white-10 bg-white-5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm cursor-pointer">
                        JavaScript
                    </li>

                    <li className="rounded-full border border-white-10 bg-white-5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm cursor-pointer">
                        React
                    </li>

                    <li className="rounded-full border border-white-10 bg-white-5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm cursor-pointer">
                        Tailwind
                    </li>

                    <li className="rounded-full border border-white-10 bg-white-5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm cursor-pointer">
                        TypeScript
                    </li>

                    <li className="rounded-full border border-white-10 bg-white-5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm cursor-pointer">
                        Next.js
                    </li>

                    <li className="rounded-full border border-white-10 bg-white-5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm cursor-pointer">
                        MUI
                    </li>
                </ul>
            </div>
        </div>
    )
}