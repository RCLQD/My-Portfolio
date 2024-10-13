import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ProjectsFromJSON from "./projects.json"

export default function Portfolio() {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return(
        <main className="w-full p-5">
            <div className="w-full grid grid-cols-3 gap-4 bg-[#181a1a] p-10 rounded-xl shadow-xl border border-gray-300" data-aos="zoom-in-up">
                {ProjectsFromJSON.Projects.map((project) => (
                    <div key={project.P_id} className="w-[23rem] h-[27rem] rounded-md hover:scale-[1.02] relative group">
                    <img src={project.img} alt="project image" className="w-full h-full rounded-md object-cover absolute opacity-75 transition-opacity group-hover:opacity-50" />
                    <div className="p-10">
                        <h1 className="border rounded-md inline-block py-1 px-4" data-theme="luxury">{project.status}</h1>
                        <h2 className="text-white text-2xl">{project.project_name}</h2>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-5 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-white text-sm">{project.description}</p>
                        <div className="flex gap-x-4 mt-4">
                            {project.link && (
                                <a href={project.link} target="_blank" className="bg-black text-white rounded-md py-1 px-2 hover:shadow-xl duration-75 hover:translate-y-0.5">Website</a>
                            )}
                            <a href={project.github} target="_blank" className="bg-black text-white rounded-md py-1 px-2 hover:shadow-xl duration-75 hover:translate-y-0.5">GitHub</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </main>
    )
}