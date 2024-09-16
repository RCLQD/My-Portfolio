import PIC1 from "../assets/PIC-1.png"

export default function Home() {
    return(
        <main className="px-5 flex h-[86vh]">
            <section className="w-[50%] flex items-center py-10">
                <div>
                    <h1 className="font-semibold text-gray-700">Hey, I'm Reysil Clarion</h1>
                    <h2 className="font-bold text-black text-4xl w-full mt-3">I am a passionate Web Developer creating user-friendly digital experiences.</h2>
                    <button className="bg-[#14142b] text-white w-[170px] h-[55px] rounded-2xl mt-14">Get in touch</button>
                    <div className="flex gap-6 mt-10 ml-1">
                        <a href="https://www.facebook.com/reysil.clarion.1" target="_blank"><span className="iconify text-4xl" data-icon="akar-icons:facebook-fill" data-inline="false"></span></a>
                        <a href="https://www.linkedin.com/in/reysilclarion/" target="_blank"><span className="iconify text-4xl" data-icon="akar-icons:linkedin-fill" data-inline="false"></span></a>
                        <a href="https://github.com/RCLQD" target="_blank"><span className="iconify text-4xl" data-icon="akar-icons:github-fill" data-inline="false"></span></a>
                    </div>
                </div>
            </section>
            <section className="w-[50%] px-2">
                <img src={PIC1} width="500" height="500" alt="My Photo" />
            </section>
        </main>
    )
}