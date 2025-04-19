export default function Form() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-stone-1000 text-white px-5 lg:px-6 py-12">
                <div className="w-full md:w-1/2 flex flex-start relative mb-40 md:mb-40">
                <h1 className="text-[150px] lg:text-[180px] font-normal leading-none text-white relative unbounded">
                    <span className="relative z-10 lg:text-[180px]">Let's</span>
                    <span className="absolute lg:top-32 top-27 left-1 z-10 lg:text-[180px] text-sky-400">
                    Talk!
                    </span>
                </h1>
                </div>
                <div className="w-full md:w-1/2 bg-stone-900 rounded-4xl p-8 space-y-6 satoshireg">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                    type="text"
                    className="w-full rounded-2xl px-4 py-4 bg-stone-800 border border-transparent focus:outline-none focus:border-orange-400"
                    />
                </div>
                <div>
                    <label className="block mb-1">Email</label>
                    <input
                    type="email"
                    className="w-full rounded-2xl px-4 py-4 bg-stone-800 border border-transparent focus:outline-none focus:border-orange-500"
                    />
                </div>
                <div>
                    <label className="block mb-1">Message</label>
                    <textarea
                    rows="4"
                    className="w-full rounded-2xl px-4 py-4 bg-stone-800 border border-transparent focus:outline-none focus:border-orange-500"
                    placeholder="Write your message"
                    ></textarea>
                </div>
                <button className="w-full rounded-xl bg-sky-400 text-black font-medium rounded-md px-6 py-3 hover:bg-sky-300 transition unbounded">
                    Submit
                </button>
                </div>
            </div>
        </>
    );
}