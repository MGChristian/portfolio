import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="p-4 lg:p-0">
        <section className="mb-16 flex flex-col gap-12 lg:mb-0 lg:h-[calc(100vh-80px)]">
          <div className="fixed -z-1 h-72 w-full bg-gradient-to-b from-neutral-950 from-10% via-neutral-900 via-50% to-neutral-950 to-90%"></div>
          <div className="flex h-64 lg:h-30 items-center justify-center flex-column">
            <h1 className="animate-slide-in text-4xl font-normal text-white text-shadow-black text-shadow-lg md:text-5xl lg:text-5xl unbounded">
              Let's Work Together
            </h1>
          </div>
        </section>
      </div>
      <Form />
      <Footer />
    </>
  )
}
