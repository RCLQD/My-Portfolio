import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Portfolio() {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return(
        <main className="w-full flex p-5">
            <div className="w-full bg-[#181a1a] p-10 rounded-xl shadow-xl border border-gray-300 flex flex-wrap justify-between gap-y-4" data-aos="zoom-in-up">
                <section className="text-center w-[23rem] h-[27rem] bg-black rounded-md hover:scale-[1.02]">1</section>
                <section className="text-center w-[23rem] h-[27rem] bg-black rounded-md hover:scale-[1.02]">2</section>
                <section className="text-center w-[23rem] h-[27rem] bg-black rounded-md hover:scale-[1.02]">3</section>
            </div>
        </main>
    )
}