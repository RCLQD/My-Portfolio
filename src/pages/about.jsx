import PIC2 from "../assets/PIC-2.png"

export default function About() {
    return(
        <main className="flex px-5 h-[86vh]">
            <section className="w-[50%]">
                <img src={PIC2} width="500" height="500" alt="My Photo" />
            </section>
            <section className="w-[50%] flex items-center">
                <div className="bg-[#eff0f5] py-7 px-10 rounded-xl shadow-xl border border-gray-300">
                    <h1 className="font-bold text-black text-3xl text-">About Me</h1>
                    <p className="font-normal text-black w-full mt-5 text-justify">I am a graduate with a Bachelor of Engineering Technology, majoring in Computer Engineering Technology. I am passionate about technology, with a strong focus on web development, constantly seeking opportunities to innovate and enhance digital experiences. I have hands-on experience in both frontend and backend development, and I enjoy tackling complex challenges by building efficient, user-centric applications. I'm always eager to learn new technologies and contribute to impactful projects that make a difference in the digital world. My goal is to continually grow as a developer while creating meaningful solutions that improve user experiences.</p>
                </div>
            </section>
        </main>
    )
}