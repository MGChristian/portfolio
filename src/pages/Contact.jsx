import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="p-5 lg:p-0 w-full mb-15">
        <section className="mb-16 flex flex-col gap-12 lg:mb-0 lg:min-h-fit">
          <div className="fixed -z-1 h-72 w-full bg-gradient-to-b from-neutral-950 from-10% via-neutral-900 via-50% to-neutral-950 to-90%"></div>
          <div className="flex h-64 lg:h-30 items-center justify-center flex-column">
            <h1 className="animate-slide-in text-4xl font-normal text-white text-shadow-black text-shadow-lg md:text-5xl lg:text-5xl unbounded">
              Let's Work Together
            </h1>
          </div>
          <div className="animate-slide-in-bottom w-full max-w-[1300px] mx-auto p-5 bg-stone-900 border border-stone-700 rounded-4xl text-white unbounded">
            <div className="grid h-fit lg:h-[400px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
              <div className="bg-stone-800 rounded-3xl py-6 px-5">
                <h2 className="font-normal text-sky-400 text-md mb-5">Hotline:</h2>
                <p className="text-xl hover:underline hover:text-orange-400 cursor-pointer">431-0416</p>
              </div>
              <div className="bg-stone-800 rounded-3xl py-6 px-5">
                <h2 className="font-normal text-sky-400 text-md mb-5">Address:</h2>
                <p className="text-xl hover:underline hover:text-orange-400 cursor-pointer">CvSU-Imus, Palico IV, Imus City, CAV, Philippines</p>
              </div>
              <div className="bg-stone-800 rounded-3xl py-6 px-5">
                <h2 className="font-normal text-sky-400 mb-5">Email:</h2>
                <p className="text-xl hover:underline hover:text-orange-400 cursor-pointer">SYNERGY@EMAIL.COM</p>
              </div>
              <div className="bg-stone-800 rounded-3xl py-6 px-5 lg:col-span-2 h-[200px]">
                <h2 className="font-normal mb-5 text-sky-400">Opening Hours:</h2>
                <p className="text-xl mb-3">MON to FRI: 9:00AM - 8:30PM</p>
                <p className="text-xl mb-3">SAT: 10:00AM - 6:30PM</p>
                <p className="text-xl">SUN: CLOSED</p>
              </div>
              <div className="bg-stone-800 rounded-3xl py-6 px-5 md:col-span-1 lg:col-span-1 h-[200px]">
                <h2 className="font-normal mb-5 text-sky-400">Follow Us:</h2>
                <div className="flex gap-4">
                  <div className="hover:bg-white rounded-2xl border border-stone-600 p-2 transition duration-300 h-[40px] w-[40px] flex justify-center items-center">
                    <FaFacebookF className="text-sky-400 hover:text-black" />
                  </div>
                  <div className="hover:bg-white rounded-2xl border border-stone-600 p-2 transition duration-300h-[40px] w-[40px] flex justify-center items-center">
                    <FaTwitter className="text-sky-400 hover:text-black" />
                  </div>
                  <div className="hover:bg-white rounded-2xl border border-stone-600 p-2 transition duration-300 h-[40px] w-[40px] flex justify-center items-center">
                    <FaLinkedinIn className="text-sky-400 hover:text-black" />
                  </div>
                  <div className="hover:bg-white rounded-2xl border border-stone-600 p-2 transition duration-300 h-[40px] w-[40px] flex justify-center items-center">
                    <FaInstagram className="text-sky-400 hover:text-black" />
                  </div>
                </div>
              </div>
            </div>
            <iframe
              title="Google Map"
              className="w-full h-80 rounded-4xl mt-3 lg:-mt-3"
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
  )
}
