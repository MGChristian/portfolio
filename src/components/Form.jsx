export default function Form() {
  return (
    <>
      <div className="bg-stone-1000 m-auto flex min-h-screen  max-w-[1300px] flex-col items-center justify-center px-5 py-12 text-white md:flex-row lg:px-0">
        <div className="flex-start relative mb-40 flex w-full md:mb-40 md:w-1/2">
          <h1 className="unbounded relative text-[150px] leading-none font-normal text-white lg:text-[180px]">
            <span className="relative z-10 lg:text-[180px]">Let's</span>
            <span className="absolute top-27 left-1 z-10 text-sky-400 lg:top-32 lg:text-[180px]">
              Talk!
            </span>
          </h1>
        </div>
        <form className="satoshireg w-full space-y-6 rounded-4xl bg-stone-900 p-8 md:w-1/2">
          <div>
            <label className="mb-1 block">Name</label>
            <input
              type="text"
              className="w-full rounded-2xl border border-transparent bg-stone-800 px-4 py-4 focus:border-orange-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block">Email</label>
            <input
              type="email"
              className="w-full rounded-2xl border border-transparent bg-stone-800 px-4 py-4 focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block">Message</label>
            <textarea
              rows="4"
              className="w-full rounded-2xl border border-transparent bg-stone-800 px-4 py-4 focus:border-orange-500 focus:outline-none"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="unbounded w-full rounded-xl bg-sky-400 px-6 py-3 font-medium text-black transition hover:bg-sky-300 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
