import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter an email.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }
    else{
      setSuccess(false);
    }
  };

  return (
    <>
      <div className="bg-stone-1000 m-auto flex w-full max-w-[1300px] flex-col items-center justify-center px-4 text-white md:flex-row">
        <div
          data-aos="fade-up"
          className="flex-start relative mb-40 flex w-full md:mb-40 md:w-1/2"
        >
          <h1 className="unbounded relative mx-auto leading-none font-normal text-white lg:mx-0">
            <span className="relative z-10 text-[6rem] md:text-[7.5rem] lg:text-[10rem]">
              Let's
            </span>
            <span className="absolute top-22 left-1 z-10 text-[6rem] text-sky-400 md:text-[7.5rem] lg:top-28 lg:text-[10rem]">
              Talk!
            </span>
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          className="satoshireg w-full space-y-4 rounded-4xl bg-linear-to-b from-stone-400/5 to-stone-800/20 p-6 md:w-1/2"
        >
          <div>
            <div className="h-5 flex items-center justify-center">
              {success && (
              <p className="text-green-500 text-sm">
                Message sent successfully!
              </p>
              )}
            </div>
            <label className="mb-1 block">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              className={'w-full rounded-2xl border border-transparent bg-linear-to-b from-stone-800/65 to-stone-800/75 px-4 py-3 focus:border-orange-400 focus:outline-none ${errors.name ? "border-red-500" : "border-gray-300"}'}
              placeholder="Your Name"
            />
            <div className="h-5">
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>
          </div>
          <div>
            <label className="mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              className={'w-full rounded-2xl border border-transparent bg-linear-to-b from-stone-800/65 to-stone-800/75 px-4 py-3 focus:border-orange-500 focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"}'}
              placeholder="Your Email"
            />
            <div className="h-5">
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="mb-1 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
              rows="4"
              className={'w-full rounded-2xl border border-transparent bg-linear-to-b from-stone-800/65 to-stone-800/75 px-4 py-3 focus:border-orange-500 focus:outline-none ${errors.message ? "border-red-500" : "border-gray-300"}'}
              placeholder="Write your message..."
            ></textarea>
            <div className="h-5">
              {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="unbounded w-full cursor-pointer rounded-xl bg-sky-400 px-6 py-3 font-medium text-black transition hover:bg-sky-300">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
