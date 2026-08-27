export default function Footer() {
    return (
        <footer className="flex flex-row justify-between p-5 items-center mt-5 border-t border-white/10 bg-white/[0.02] backdrop-blur-xl">
                <div className="flex gap-6">
                    <a
                        href="https://github.com/JavohirJumaev"
                        className="text-gray-400 hover:text-cyan-300 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/javohirjumaev"
                        className="text-gray-400 hover:text-cyan-300 transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:callmejavoh@email.com"
                        className="text-gray-400 hover:text-cyan-300 transition"
                    >
                        Email
                    </a>

                    <a
                        href="https://t.me/javvvoh"
                        className="text-gray-400 hover:text-cyan-300 transition"
                    >
                        Telegram
                    </a>
                </div>

                <p className=" text-gray-500 text-center">
                    © 2026 Javohir Jumaev. All rights reserved.
                </p>

        </footer>
    );
}