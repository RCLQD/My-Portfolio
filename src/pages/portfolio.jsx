import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Portfolio() {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return(
        <main className="w-full h-[80vh] flex px-5 py-5">
            <div className="w-full bg-[#181a1a] py-10 px-10 rounded-xl shadow-xl border border-gray-300" data-aos="zoom-in-up">

            </div>
        </main>
    )
}