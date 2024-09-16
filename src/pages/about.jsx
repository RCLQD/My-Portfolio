import PIC2 from "../assets/PIC-2.png"

export default function About() {
    return(
        <main className="px-5 mt-16">
            <div className="flex w-full">
                <section className="w-[35%]">
                    <img src={PIC2} width="350" height="350" alt="My Photo" />
                </section>
                <section className="w-[65%] flex items-center">
                    <div className="bg-[#d9d9d9] py-7 px-10 rounded-xl shadow-xl border border-gray-300">
                        <h1 className="font-bold text-black text-3xl text-">About Me</h1>
                        <p className="font-normal text-black w-full mt-5 text-justify">I am a graduate with a Bachelor of Engineering Technology, majoring in Computer Engineering Technology. I am passionate about technology, with a strong focus on web development, constantly seeking opportunities to innovate and enhance digital experiences. I have hands-on experience in both frontend and backend development, and I enjoy tackling complex challenges by building efficient, user-centric applications. I'm always eager to learn new technologies and contribute to impactful projects that make a difference in the digital world. My goal is to continually grow as a developer while creating meaningful solutions that improve user experiences.</p>
                    </div>
                </section>
            </div>
            <div className="flex gap-x-4 w-full">
                <section className="w-[30%] space-y-3">
                    <div className="w-full p-4 bg-[#d9d9d9] rounded-md shadow-lg border border-gray-300">
                        <h1 className="text-2xl text-black font-semibold">Technical Skills</h1>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <div className="tooltip" data-tip="MySQL">
                                <box-icon type='logo' name='html5' color='#dd4d26' size='md' animation='tada-hover'></box-icon>
                            </div>
                            <div className="tooltip" data-tip="CSS">
                                <box-icon name='css3' type='logo' color='#2965f1' size='md' animation='tada-hover'></box-icon>
                            </div>
                            <div className="tooltip" data-tip="Bootstrap">
                                <box-icon type='logo' name='bootstrap' color='#0eb8d5' size='md' animation='tada-hover'></box-icon>
                            </div>
                            <div className="tooltip" data-tip="Tailwind">
                                <box-icon name='tailwind-css' type='logo' color='#0eb8d5' size='md' animation='tada-hover'></box-icon>
                            </div>
                            <div className="tooltip" data-tip="JavaScript">
                                <box-icon type='logo' name='javascript' color='#f7e025' size='md' animation='tada-hover'></box-icon>
                            </div>
                            <div className="tooltip" data-tip="React">
                                <box-icon name='react' type='logo' color='#66dcfb' size='md' animation='tada-hover'></box-icon>
                            </div>
                            <div className="tooltip" data-tip="PHP">
                                <box-icon type='logo' name='php' color='#474a8a' size='md' animation='tada-hover'></box-icon>
                            </div>
                            <div className="tooltip" data-tip="Node.js">
                                <box-icon type='logo' name='nodejs' color='#71c450' size='md' animation='tada-hover'></box-icon>
                            </div>
                            <div className="tooltip" data-tip="Git">
                                <box-icon name='git' type='logo' color='#f15536' size='md' animation='tada-hover'></box-icon>
                            </div>
                            <div className="tooltip" data-tip="MySQL">
                                <box-icon type='solid' name='data' color='#f29418' size='md' animation='tada-hover'></box-icon>
                            </div>
                        </div>
                        <hr className="my-4 border-[1px] border-gray-400" />
                        <div>
                            <h1 className="text-2xl text-black font-semibold">Soft Skills</h1>
                            <ul className="list-disc pl-5">
                                <li className="text-black text-sm">Problem-Solving</li>
                                <li className="text-black text-sm">Communication</li>
                                <li className="text-black text-sm">Teamwork</li>
                                <li className="text-black text-sm">Adaptability</li>
                                <li className="text-black text-sm">Time Management</li>
                                <li className="text-black text-sm">Attention to Detail</li>
                                <li className="text-black text-sm">Critical Thinking</li>
                                <li className="text-black text-sm">Self-Learning</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="w-[70%] bg-[#d9d9d9] rounded-md shadow-lg border border-gray-300">
                    
                </section>
            </div>
        </main>
    )
}