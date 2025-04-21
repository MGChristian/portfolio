import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Background from "../components/background";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Background />
      <div className="mb-15 w-full p-5 lg:p-0">
        <section className="mb-16 flex flex-col gap-12 lg:mb-0 lg:min-h-fit">
          <div className="flex-column flex h-64 items-center justify-center lg:h-30">
            <h1 className="animate-slide-in unbounded text-4xl font-normal text-white text-shadow-black text-shadow-lg md:text-5xl lg:text-5xl">
              Let's Work Together
            </h1>
          </div>
          <div className="animate-slide-in-bottom unbounded mx-auto w-full max-w-[1300px] rounded-4xl border border-stone-700 bg-stone-900 p-5 text-white">
            <div className="grid h-fit grid-cols-1 gap-2 md:grid-cols-2 lg:h-[400px] lg:grid-cols-3">
              <div className="rounded-3xl bg-stone-800 px-5 py-6">
                <h2 className="text-md mb-5 font-normal text-sky-400">
                  Hotline:
                </h2>
                <p className="cursor-pointer text-xl hover:text-orange-400 hover:underline">
                  431-0416
                </p>
              </div>
              <div className="rounded-3xl bg-stone-800 px-5 py-6">
                <h2 className="text-md mb-5 font-normal text-sky-400">
                  Address:
                </h2>
                <p className="cursor-pointer text-xl hover:text-orange-400 hover:underline">
                  CvSU-Imus, Palico IV, Imus City, CAV, Philippines
                </p>
              </div>
              <div className="rounded-3xl bg-stone-800 px-5 py-6">
                <h2 className="mb-5 font-normal text-sky-400">Email:</h2>
                <p className="cursor-pointer text-xl hover:text-orange-400 hover:underline">
                  SYNERGY@EMAIL.COM
                </p>
              </div>
              <div className="h-[200px] rounded-3xl bg-stone-800 px-5 py-6 lg:col-span-2">
                <h2 className="mb-5 font-normal text-sky-400">
                  Opening Hours:
                </h2>
                <p className="mb-3 text-xl">MON to FRI: 9:00AM - 8:30PM</p>
                <p className="mb-3 text-xl">SAT: 10:00AM - 6:30PM</p>
                <p className="text-xl">SUN: CLOSED</p>
              </div>
              <div className="h-[200px] rounded-3xl bg-stone-800 px-5 py-6 md:col-span-1 lg:col-span-1">
                <h2 className="mb-5 font-normal text-sky-400">Follow Us:</h2>
                <div className="flex gap-4">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl border border-stone-600 p-2 transition duration-300 hover:bg-white">
                    <FaFacebookF className="text-sky-400 hover:text-black" />
                  </div>
                  <div className="duration-300h-[40px] flex w-[40px] items-center justify-center rounded-2xl border border-stone-600 p-2 transition hover:bg-white">
                    <FaTwitter className="text-sky-400 hover:text-black" />
                  </div>
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl border border-stone-600 p-2 transition duration-300 hover:bg-white">
                    <FaLinkedinIn className="text-sky-400 hover:text-black" />
                  </div>
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl border border-stone-600 p-2 transition duration-300 hover:bg-white">
                    <FaInstagram className="text-sky-400 hover:text-black" />
                  </div>
                </div>
              </div>
            </div>
            <iframe
              title="Google Map"
              className="mt-3 h-80 w-full rounded-4xl lg:-mt-3"
              src="https://maps.google.com/maps?q=CWHW%2B9VJ%20Cavite%20Civic%20Center%2C%20Cavite%20City%2C%204103%20Cavite&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
      <Form />
      <Footer />
    </>
  );
}
