export default function Portfolio() {
    return(
        <main className="w-full flex px-5">
            <section className="w-[30%] space-y-3">
                <div className="w-full p-4 bg-[#eff0f5] rounded-md shadow-lg border border-gray-300">
                    <h1 className="text-2xl font-semibold">Technical Skills</h1>
                    <div className="space-x-3 mt-3">
                        <div className="relative group inline-block">
                            <box-icon type='logo' name='html5' color='#dd4d26' size='md' animation='tada-hover'></box-icon>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                HTML
                            </div>
                        </div>
                        <div className="relative group inline-block">
                            <box-icon name='css3' type='logo' color='#2965f1' size='md' animation='tada-hover'></box-icon>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                CSS
                            </div>
                        </div>
                        <div className="relative group inline-block">
                            <box-icon type='logo' name='bootstrap' color='#0eb8d5' size='md' animation='tada-hover'></box-icon>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Bootstrap
                            </div>
                        </div>
                        <div className="relative group inline-block">
                            <box-icon name='tailwind-css' type='logo' color='#0eb8d5' size='md' animation='tada-hover'></box-icon>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Tailwind
                            </div>
                        </div>
                        <div className="relative group inline-block">
                            <box-icon type='logo' name='javascript' color='#f7e025' size='md' animation='tada-hover'></box-icon>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                JavaScript
                            </div>
                        </div>
                        <div className="relative group inline-block">
                            <box-icon name='react' type='logo' color='#66dcfb' size='md' animation='tada-hover'></box-icon>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                React
                            </div>
                        </div>
                        <div className="relative group inline-block">
                            <box-icon type='logo' name='php' color='#474a8a' size='md' animation='tada-hover'></box-icon>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PHP
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 bg-[#eff0f5] rounded-md shadow-lg border border-gray-300">
                    <h1 className="text-2xl font-semibold">Soft Skills</h1>
                    <p className="text-[13px] mt-3">Problem-Solving, Communication, Teamwork, Adaptability, Time Management, Attention to Detail, Critical Thinking, Self-Learning.</p>
                </div>
            </section>
            <section className="w-[70%] bg-blue-900">
                haha
            </section>
        </main>
    )
}