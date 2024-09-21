import PIC2 from "../assets/PIC-2.png"
import Resume from "../assets/Reysil Clarion Resume.pdf";
import CL from "../assets/Reysil Clarion Cover Letter.pdf";
import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function About() {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    
    return(
        <main className="px-5 pt-5 pb-5">
            <div className="flex w-full">
                <section className="w-[35%] flex justify-center items-center" data-aos="fade-right">
                    <img src={PIC2} width="350" height="350" alt="My Photo" />
                </section>
                <section className="w-[65%] flex items-center" data-aos="fade-up">
                    <div className="bg-[#181a1a] py-10 px-10 rounded-xl shadow-xl border border-gray-300">
                        <h1 className="font-semibold text-3xl text-">About Me</h1>
                        <p className="font-normal w-full mt-5 text-justify">Hello, I’m Reysil M. Clarion, a recent graduate with a Bachelor of Engineering Technology, majoring in Computer Engineering Technology. I’m passionate about technology, with a strong focus on web development, and I constantly seek opportunities to innovate and enhance digital experiences. I have hands-on experience in both frontend and backend development, and I enjoy tackling complex challenges by building efficient, user-centric applications. I’m always eager to learn new technologies and contribute to impactful projects that make a difference in the digital world. My goal is to continually grow as a developer while creating meaningful solutions that improve user experiences.</p>
                    </div>
                </section>
            </div>
            <div className="flex gap-x-4 w-full pt-4">
                <section className="w-[34%] space-y-3">
                    <div className="w-full p-4 bg-[#181a1a] rounded-md shadow-lg border border-gray-300" data-aos="fade-right">
                        <h1 className="font-medium">Technical Skills:</h1>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <div className="tooltip" data-tip="HTML">
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
                            <h1 className="font-medium">Soft Skills:</h1>
                            <ul className="list-disc pl-4 mt-1">
                                <li className="text-sm">Problem-Solving</li>
                                <li className="text-sm">Communication</li>
                                <li className="text-sm">Teamwork</li>
                                <li className="text-sm">Adaptability</li>
                                <li className="text-sm">Time Management</li>
                                <li className="text-sm">Attention to Detail</li>
                                <li className="text-sm">Critical Thinking</li>
                                <li className="text-sm">Self-Learning</li>
                            </ul>
                        </div>
                        <hr className="my-4 border-[1px] border-gray-400" />
                        <div className="flex">
                            <div className="w-[50%]">
                                <h1 className="font-medium">Resume:</h1>
                                <a href={Resume} download className="text-[12px] text-blue-500">
                                    Reysil Clarion Resume.pdf
                                </a>
                            </div>
                            <div className="w-[50%]">
                                <h2 className="font-medium">Cover Letter:</h2>
                                <a href={CL} download className="text-[12px] text-blue-500">
                                    Reysil Clarion Cover Letter.pdf
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-[65%] space-y-4">
                    <div className="w-full h-[48%] bg-[#181a1a] rounded-md shadow-lg border border-gray-300 p-4" data-aos="fade-up">
                        <h1 className="font-medium">Education</h1>
                        <div className="flex justify-between w-full h-[70%] mt-5">
                            <div className="w-[49%] bg-black rounded-md p-2">
                                <p className="text-xs">2020-2024</p>
                                <h1 className="text-sm font-medium mt-5">Technological University of the Philippines Visayas</h1>
                                <h1 className="text-xs italic mt-2">Bachelor of Engineering Technology Major in Computer Engineering Technology</h1>
                            </div>
                            <div className="w-[49%] bg-black rounded-md p-2">
                                <p className="text-xs">2018-2020</p>
                                <h1 className="text-sm font-medium mt-5">Caduha-an National High School</h1>
                                <h1 className="text-xs italic mt-2">Humanities and Social Sciences (HUMSS)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[48%] bg-[#181a1a] rounded-md shadow-lg border border-gray-300 p-4" data-aos="fade-up">
                        <h1 className="font-medium">Experiences</h1>
                        <div className="flex justify-between w-full h-[70%] mt-5">
                            <div className="w-[49%] bg-black rounded-md p-2">
                                <p className="text-xs">January - June, 2024</p>
                                <a href="https://www.philkoei.com.ph/" target="_blank" className="hover:text-blue-500">
                                    <h1 className="text-sm font-medium mt-7">Philkoei International Inc.</h1>
                                </a>
                                <h2 className="text-sm mt-2">Web Developer/IT Technical Support Intern</h2>
                            </div>
                            <div className="w-[49%] bg-black rounded-md p-2">
                                <p className="text-xs">July - August, 2023</p>
                                <a href="https://pixel8websolutions.com/" target="_blank" className="hover:text-blue-500">
                                    <h1 className="text-sm font-medium mt-7">Pixel8 Web Solutions & Consultancy Inc.</h1>
                                </a>
                                <h2 className="text-sm mt-2">System Analyst Intern</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}