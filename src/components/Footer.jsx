import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <>
        <footer className="px-5 lg:px-6 w-full mx-auto">
            <div data-aos="fade-up" className="w-full max-w-[1300px] bg-stone-900 rounded-4xl p-4 mx-auto text-white mb-3">
                <div className="space-y-3">
                    <div className="bg-stone-800 rounded-3xl p-4 flex flex-col items-start lg:w-[800px]">
                        <Mail className="mb-2 text-sky-400 ml-3 min-w-[24px]" size={24} />
                        <a href='#' className="text-md md:text-base satoshireg ml-3 hover:text-orange-400 hover:underline">synergy@email.com</a>
                    </div>
                    <div className="bg-stone-800 rounded-3xl p-4 flex flex-col items-start lg:w-[800px]">
                        <Phone className="mb-2 text-sky-400 ml-3 min-w-[24px]" size={24} />
                        <a href='#' className="text-md md:text-base satoshireg ml-3 hover:text-orange-400 hover:underline">431-0416</a>
                    </div>
                    <div className="bg-stone-800 rounded-3xl p-4 flex flex-col items-start lg:w-[800px]">
                        <MapPin className="mb-2 text-sky-400 ml-3 min-w-[24px]" size={24} />
                        <a href='#' className="text-md md:text-base break-words satoshireg ml-3 hover:text-orange-400 hover:underline">CvSU-Imus, Palico IV, Imus City, CAV, Philippines</a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="max-w-[1300px] w-full bg-stone-900 rounded-4xl p-4 mx-auto mb-15">
                <div className="text-center mb-4">
                    <p className="text-md text-sky-400 mb-4 unbounded">Follow us:</p>
                    <div className="flex justify-center gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <div
                            key={i}
                            className="p-3 rounded-2xl hover:bg-white transition duration-300 ease-in-out border border-stone-600"
                        >
                            <Icon className="text-white hover:text-black transition" size={20} />
                        </div>
                        ))}
                    </div>
                </div>
                <form className="flex flex-col lg:flex-row items-center gap-2 justify-center mt-6 w-full lg:w-1/2 mx-auto">
                    <input
                        type="email"
                        placeholder="Email"
                        className="flex w-full lg:w-[200px] rounded-2xl px-4 py-3 text-white bg-stone-800 border border-stone-500 focus:outline-none focus:border-orange-400"
                    />
                    <button className="bg-sky-400 w-full lg:w-[270px] text-black px-4 py-3 rounded-2xl hover:bg-sky-300 transition unbounded cursor-pointer">
                        Subscibe for newsletter
                    </button>
                </form>
            </div>
        </footer>
    </>
  );
}
