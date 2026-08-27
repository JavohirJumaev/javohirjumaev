export default function Footer() {
    return (
        <footer className="mt-5 border-t border-white/10 bg-white/[0.02] backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-5">
                <div className="flex gap-6">
                    <a
                        href="https://github.com/JavohirJumaev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-300 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/javohirjumaev"
                        target="_blank"
                        rel="noopener noreferrer"
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

                <p className="text-sm text-gray-500 text-center">
                    © 2026 Javohir Jumaev. All rights reserved.
                </p>

            </div>
        </footer>
    );
}